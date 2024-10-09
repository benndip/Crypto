import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

// Icons
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";

import styles from "./Home.style";

import { PRIMARY_WHITE_COLOR } from "../../utils/colors";
import { AntDesign } from "@expo/vector-icons";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../utils/sizes";
import { CoinType } from "../../types";
import { TrendingCryptoItem } from "@components/index";
import { useGetCryptoMarketsQuery } from "src/redux/reducers/coinSlice";
import { useGetTrendingSearchQuery } from "src/redux/reducers/trendingSearchSlice";

const Home = () => {
  const [page, setPage] = useState<number>(1);

  const { data, error, isLoading } = useGetCryptoMarketsQuery({ page });
  const {
    data: trendingSearchData,
    error: trendingSearchError,
    isLoading: loadingTrendingSearch,
  } = useGetTrendingSearchQuery(undefined);

  // console.log("Trending markets", trendingSearchData);

  const renderTrendingCoin = ({ item }: { item: CoinType }) => {
    // console.log('item', item)
    return <TrendingCryptoItem coin={item} />;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.topIconAndText}>
        <FontAwesome5 name="bitcoin" size={24} color="#F5951C" />
        <Text style={styles.text}>0x2930...3094</Text>
      </TouchableOpacity>
      <Text style={styles.curerntWalletTitleText}>Current Wallet Balance</Text>
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
            <AntDesign name="plus" size={24} color={PRIMARY_WHITE_COLOR} fas />
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
          data={trendingSearchData?.coins.map((coin) => coin.item)}
          renderItem={renderTrendingCoin}
          horizontal
          style={styles.trendingFlatlist}
          showsHorizontalScrollIndicator={false}
          refreshing={loadingTrendingSearch}
          snapToInterval={DEVICE_WIDTH * 0.7}
          decelerationRate="fast"
        />
      </View>
    </View>
  );
};

export default Home;
