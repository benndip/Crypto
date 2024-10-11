// @ts-nocheck
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import SearchableDropwDown from "react-native-searchable-dropdown";
import styles from "./styles";
import { useRecoilState } from "recoil";
import { allPortfolioBoughtAssetsInStorage } from "./../../atoms/PortfolioAssets";
import { getAllCoins, getDetailedCoinData } from "./../../services/requests";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "@utils/sizes";
import { CustomButton } from "@components/index";

export default function AddNewAssetScreen() {
  const [allCoins, setAllCoins] = useState([]);
  const [boughtAssetQuantity, setBoughtAssetQuantity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCoinId, setSelectedCoinId] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [assetsInStorage, setAssetsInStorage] = useRecoilState(
    allPortfolioBoughtAssetsInStorage
  );
  const navigation = useNavigation();
  const fetchAllCoins = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const allCoins = await getAllCoins();
    setAllCoins(allCoins);
    setIsLoading(false);
  };
  const fetchCoinInfo = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const coinInfo = await getDetailedCoinData(selectedCoinId);
    setSelectedCoin(coinInfo);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchAllCoins();
  }, []);
  useEffect(() => {
    if (selectedCoinId) {
      fetchCoinInfo();
    }
  }, [selectedCoinId]);

  const handlerNewAsset = async () => {
    const newAsset = {
      id: selectedCoin.id,
      //to do : here implement uuid
      unique_id: selectedCoin.id + Math.random(0, 1e6),
      name: selectedCoin.name,
      image: selectedCoin.image.small,
      ticker: selectedCoin.symbol.toUpperCase(),
      quantityBought: parseFloat(boughtAssetQuantity),
      priceBought: selectedCoin.market_data.current_price.usd,
    };
    const newAssets = [...assetsInStorage, newAsset];
    const jsonValue = JSON.stringify(newAssets);
    await AsyncStorage.setItem("@portfolio_coins", jsonValue);
    setAssetsInStorage(newAssets);
    navigation.goBack();
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : DEVICE_HEIGHT * 0.01,
          paddingHorizontal: DEVICE_WIDTH * 0.04,
        }}
      >
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <SearchableDropwDown
            items={allCoins}
            onItemSelect={(item) => setSelectedCoinId(item.id)}
            containerStyle={styles.dropdownContainer}
            itemStyle={styles.item}
            itemTextStyle={{
              color: "white",
            }}
            resetValue={false}
            placeholder={selectedCoinId || "Select a coin..."}
            placeholderTextColor="white"
            textInputProps={{
              underlineColorAndroid: "transparent",
              style: styles.textInput,
            }}
            itemsContainerStyle={{
              marginTop: 10,
              maxHeight: DEVICE_HEIGHT * 0.7,
            }}
          />
          {selectedCoin && (
            <>
              <View style={styles.boughtContainer}>
                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    style={{ color: "white", fontSize: 90 }}
                    value={boughtAssetQuantity}
                    placeholder="0"
                    keyboardType="numeric"
                    onChangeText={setBoughtAssetQuantity}
                    autoFocus
                    placeholderTextColor="#fff"
                  />
                  <Text style={styles.ticker}>
                    {selectedCoin.symbol.toUpperCase()}
                  </Text>
                </View>
                <Text style={styles.pricePerCoin}>
                  ${selectedCoin.market_data.current_price.usd} per coin
                </Text>
              </View>
              <CustomButton
                title="Add"
                onPress={handlerNewAsset}
                disabled={boughtAssetQuantity === ""}
                style={styles.buttonContainer}
              />
            </>
          )}
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
