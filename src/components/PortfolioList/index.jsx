import { View, Text, Pressable, SafeAreaView, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useRecoilValue, useRecoilState } from "recoil";
import { SwipeListView } from "react-native-swipe-list-view";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import PortfolioItem from "../PortfolioItem";
import {
  allPortfolioAssets,
  allPortfolioBoughtAssetsInStorage,
} from "./../../atoms/PortfolioAssets";
import { paths } from "src/constants/paths";
import { PRIMARY_DARK_BLUE_COLOR, SECONDARY_BLUE_COLOR } from "@utils/colors";
import { useAppSelector } from "src/redux/store";
import CustomButton from "@components/CustomButton/CustomButton.component";

export default function PortfolioList() {
  const navigation = useNavigation();
  const assets = useRecoilValue(allPortfolioAssets);
  const { user } = useAppSelector((state) => state.auth);
  const [storageAssets, setStorageAssets] = useRecoilState(
    allPortfolioBoughtAssetsInStorage
  );
  const getCurrentBalance = () =>
    assets.reduce(
      (total, currentAsset) =>
        total + currentAsset.currentPrice * currentAsset.quantityBought,
      0
    );

  const getCurrentValueChange = () => {
    const currentBalance = getCurrentBalance();
    const boughtBalance = assets.reduce(
      (total, currentAsset) =>
        total + currentAsset.priceBought * currentAsset.quantityBought,
      0
    );
    return (currentBalance - boughtBalance).toFixed(2);
  };

  const getCurrentPercentageChange = () => {
    const currentBalance = getCurrentBalance();
    const boughtBalance = assets.reduce(
      (total, currentAsset) =>
        total + currentAsset.priceBought * currentAsset.quantityBought,
      0
    );
    return boughtBalance == 0
      ? 0
      : (((currentBalance - boughtBalance) / boughtBalance) * 100).toFixed(2);
  };
  const formatCurrentBalance = (fn) => {
    const totalFixed = new Intl.NumberFormat().format(fn);
    return totalFixed;
  };
  const handleDeleteAsset = async (asset) => {
    if (storageAssets) {
      const newAssets = storageAssets?.filter(
        (coin) => coin.unique_id !== asset.item.unique_id
      );
      const jsonValue = JSON.stringify(newAssets);
      await AsyncStorage.setItem("@portfolio_coins", jsonValue);
      setStorageAssets(newAssets);
    }
  };
  const renderDeleteButton = (data) => {
    return (
      <Pressable
        style={styles.deleteButtonContainer}
        onPress={() => handleDeleteAsset(data)}
      >
        <FontAwesome name="trash-o" size={24} color="white" />
      </Pressable>
    );
  };
  return (
    <SafeAreaView>
      <SwipeListView
        data={assets}
        renderItem={({ item }) => <PortfolioItem item={item} />}
        keyExtractor={({ id }, index) => `${id}${index}`}
        contentContainerStyle={{ height: "100%" }}
        swipeRowStyle={{
          backgroundColor: PRIMARY_DARK_BLUE_COLOR,
        }}
        style={{
          paddingHorizontal: 8,
        }}
        ListHeaderComponent={
          <>
            <View
              style={{
                backgroundColor: "rgba(255,255,255,0.02)",
                padding: 20,
                borderRadius: 14,
              }}
            >
              <View
                style={[
                  styles.flexRow,
                  {
                    justifyContent: "space-between",
                  },
                ]}
              >
                <View
                  style={[
                    styles.flexRow,
                    {
                      gap: 18,
                    },
                  ]}
                >
                  <Image
                    source={require("../../../assets/images/profile.jpg")}
                    style={styles.profileImage}
                  />
                  <View style={{ gap: 3 }}>
                    <Text style={styles.detailText}>
                      {user?.email?.split("@")?.[0]}
                    </Text>
                    <Text
                      style={[
                        styles.detailText,
                        {
                          fontSize: 12,
                          fontWeight: "400",
                        },
                      ]}
                    >
                      {user?.email}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    ...styles.priceChangePercentageContainer,
                    backgroundColor:
                      getCurrentValueChange() >= 0 ? "#16c784" : "#ea3943",
                  }}
                >
                  <AntDesign
                    name={
                      getCurrentValueChange() >= 0 ? "caretup" : "caretdown"
                    }
                    size={8}
                    color="white"
                    style={{ alignSelf: "center", marginRight: 5 }}
                  />
                  <Text style={styles.percentageChange}>
                    {getCurrentPercentageChange()} %
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: 30 }}>
                <Text style={styles.currentBalance}>Current Balance</Text>
                <Text style={styles.currentBalanceValue}>
                  $ {formatCurrentBalance(getCurrentBalance().toFixed(2))}
                </Text>
                <Text
                  style={{
                    color: getCurrentValueChange() >= 0 ? "#16c784" : "#ea3943",
                  }}
                >
                  ${formatCurrentBalance(getCurrentValueChange())} (all time)
                </Text>
              </View>
            </View>
            <Text style={styles.assetsTitle}>Your Assets</Text>
          </>
        }
        renderHiddenItem={(data) => renderDeleteButton(data)}
        rightOpenValue={-70}
        disableRightSwipe
        closeOnRowPress
        ListFooterComponent={
          <CustomButton
            title="Add New Asset"
            onPress={() => navigation.navigate(paths.ADDNEWASSET)}
            style={styles.buttonContainer}
          />
        }
      />
    </SafeAreaView>
  );
}
