import React, { useEffect, useState } from "react";
import {
  FlatList,
  Platform,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CoinCard from "./../../components/CoinCard";
import { getMarketData } from "./../../services/requests";
import styles from "./Home.style";
import {
  AntDesign,
  FontAwesome5,
  FontAwesome6,
  Feather,
} from "@expo/vector-icons";
import { PRIMARY_WHITE_COLOR } from "@utils/colors";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "@utils/sizes";
import { TrendingCryptoItem } from "@components/index";
import { paths } from "src/constants/paths";
import { CoinType } from "../../types";

export default function HomeScreen({ navigation }: any) {
  const [coins, setCoins] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchCoins = async (page = 1) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const coinsData = await getMarketData(page);
    if (coinsData) setCoins((prevCoins: any) => [...prevCoins, ...coinsData]);
    setIsLoading(false);
  };
  const refetchCoins = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const coinsData = await getMarketData();
    setCoins(coinsData);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchCoins();
  }, []);

  const renderTrendingCoin = ({ item }: { item: CoinType }) => {
    return (
      <TrendingCryptoItem
        coin={item}
        onPress={() =>
          navigation.navigate(paths.COINDETAIL, { coinId: item.id })
        }
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.topIconAndText}>
          <FontAwesome5 name="bitcoin" size={24} color="#F5951C" />
          <Text style={styles.text}>
            {coins?.[0]?.symbol}: {coins?.[0]?.max_supply}
          </Text>
        </TouchableOpacity>
        <Text style={styles.curerntWalletTitleText}>
          Current Wallet Balance
        </Text>
        <Text style={styles.amountText}>$12,490.20</Text>
        <View style={styles.trendArrowAndPercent}>
          <FontAwesome6 name="arrow-trend-up" size={16} color="#1BDD67" />
          <Text style={styles.percentageColor}>12.55%</Text>
        </View>
        <View style={styles.sendButtonRecieve}>
          <View style={styles.iconAndText}>
            <View style={styles.iconContanier}>
              <Feather
                name="arrow-up-right"
                size={24}
                color={PRIMARY_WHITE_COLOR}
              />
            </View>
            <Text style={styles.sendText}>Send</Text>
          </View>
          <View style={styles.iconAndText}>
            <View
              style={[
                styles.iconContanier,
                { backgroundColor: "#315BF0", borderWidth: 0 },
              ]}
            >
              <AntDesign
                name="plus"
                size={24}
                color={PRIMARY_WHITE_COLOR}
                fas
              />
            </View>
            <Text style={styles.buyText}>Buy</Text>
          </View>
          <View style={styles.iconAndText}>
            <View style={styles.iconContanier}>
              <Feather
                name="arrow-down-left"
                size={24}
                color={PRIMARY_WHITE_COLOR}
              />
            </View>
            <Text style={styles.receiveText}>Receive</Text>
          </View>
        </View>
        <View
          style={{
            paddingLeft: DEVICE_WIDTH * 0.05,
            marginTop: DEVICE_HEIGHT * 0.05,
          }}
        >
          <Text style={styles.trendingText}>Trending coins</Text>

          <FlatList
            data={coins}
            onEndReached={() => fetchCoins(coins.length / 50 + 1)}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={
              <FlatList
              data={coins}
              renderItem={renderTrendingCoin}
                horizontal
                keyExtractor={(item) => item.id}
                style={styles.trendingFlatlist}
                showsHorizontalScrollIndicator={false}
                // refreshing={loadingTrendingSearch}
                snapToInterval={DEVICE_WIDTH * 0.7}
                decelerationRate="fast"
                onEndReached={() => fetchCoins(coins.length / 20 + 1)}
              />
            }
            renderItem={({ item }) => <CoinCard marketCoin={item} />}
            // refreshControl={
            //   <RefreshControl
            //     refreshing={isLoading}
            //     tintColor="white"
            //     onRefresh={refetchCoins}
            //   />
            // }
            contentContainerStyle={Platform.OS === "ios" ? {} : { paddingVertical: 16, paddingBottom: DEVICE_HEIGHT*0.34 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
