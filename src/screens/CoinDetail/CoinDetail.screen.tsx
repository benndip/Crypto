// @ts-nocheck
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  s,
} from "react-native";
import { LineChart, LineChartProvider } from "react-native-wagmi-charts";
import Filter from "../../components/CoinDetail/Filter";
import CoinDetailHeader from "./../../components/CoinDetail/Header";
import CoinPriceInfo from "./../../components/CoinDetail/PriceInfo";
import {
  getCoinMarketChart,
  getDetailedCoinData,
} from "./../../services/requests";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import {
  PRIMARY_GRAY_COLOR,
  PRIMAry_GREEN_COLOR,
  PRIMARY_RED_COLOR,
  SECONDARY_BLUE_COLOR,
} from "@utils/colors";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "@utils/sizes";
import { CustomButton, LabelValueCard } from "@components/index";
import { coinStatuses } from "@assets/data";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const filterDaysArray = [
  { filterDay: "1", filterText: "24h" },
  { filterDay: "7", filterText: "7d" },
  { filterDay: "30", filterText: "30d" },
  { filterDay: "365", filterText: "1y" },
  { filterDay: "max", filterText: "All" },
];

export default function CoinDetail({ route, navigation }) {
  const [coin, setCoin] = useState(null);
  const [coinMarketData, setCoinMarketData] = useState(null);
  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUsdValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRange, setSelectedRange] = useState("1");
  const [isTrading, setIsTrading] = useState(false);
  const [descriptionLines, setDescriptionLines] = useState<number | undefined>(
    3
  );

  const fetchCoinData = async () => {
    setIsLoading(true);
    const fetchedCoinData = await getDetailedCoinData(route.params?.coinId);
    setCoin(fetchedCoinData);
    setUsdValue(fetchedCoinData.market_data.current_price.usd.toString());
    setIsLoading(false);
  };

  const fetchMarketCoinData = async (selectedRangeValue) => {
    const fetchedCoinMarketData = await getCoinMarketChart(
      route.params?.coinId,
      selectedRangeValue
    );
    setCoinMarketData(fetchedCoinMarketData);
  };

  React.useEffect(() => {
    if (coin) {
      navigation.setOptions({
        title: "",
        headerShown: true,
        headerTitleStyle: {
          color: "#fff",
        },
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#0E0C20",
        },
        headerLeft: () => (
          <HeaderLeft
            image={coin.image.small}
            symbol={coin.symbol}
            marketCapRank={coin.market_data.market_cap_rank}
            name={coin.name}
          />
        ),
        headerRight: () => (
          <HeaderRight
            coinId={coin.id}
            currentPrice={coin.market_data.current_price.usd}
            priceChangePercentage24h={
              coin.market_data.price_change_percentage_24h
            }
          />
        ),
      });
    }
  }, [navigation, coin]);

  useEffect(() => {
    fetchCoinData();
    fetchMarketCoinData(selectedRange);
  }, []);

  const handlerSelectedRange = (selectedRangeValue) => {
    setSelectedRange(selectedRangeValue);
    fetchMarketCoinData(selectedRangeValue);
  };

  const memoOnSelectedRangeChange = React.useCallback(
    (range) => handlerSelectedRange(range),
    []
  );

  const screenWidth = Dimensions.get("window").width;

  if (isLoading || !coin || !coinMarketData) {
    return <ActivityIndicator size="large" />;
  }

  const {
    id,
    image: { small },
    symbol,
    name,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
    description: { en: description },
    sentiment_votes_up_percentage,
    sentiment_votes_down_percentage,
    watchlist_portfolio_users,
  } = coin;

  const firstFourCurrencies = Object.entries(current_price).slice(0, 4);

  const currencies = firstFourCurrencies.map(([key, value]) => ({
    label: key,
    value: value,
  }));

  const { prices } = coinMarketData;
  const chartChangedColor =
    current_price?.usd > prices?.[0][1] ? "#16c784" : "#ea3943";

  const handleChangeCoinValue = (value) => {
    setCoinValue(value);
    const floatValue = parseFloat(value.replace(",", ".")) || 0;
    setUsdValue((floatValue * current_price.usd).toString());
  };

  const handleChangeUsdValue = (value) => {
    setUsdValue(value);
    const floatValue = parseFloat(value.replace(",", ".")) || 0;
    setCoinValue((floatValue / current_price.usd).toString());
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            // paddingTop: 10,
            paddingBottom: DEVICE_HEIGHT * 0.03,
          }}
          showsVerticalScrollIndicator={false}
        >
          <LineChartProvider
            data={prices?.map(([timestamp, value]) => ({ timestamp, value }))}
          >
            <View style={styles.filterContainer}>
              {filterDaysArray.map((day) => (
                <Filter
                  key={day.filterDay}
                  filterDay={day.filterDay}
                  filterText={day.filterText}
                  selectedRange={selectedRange}
                  setSelectedRange={memoOnSelectedRangeChange}
                />
              ))}
            </View>

            <View style={styles.chartView}>
              <LineChart height={DEVICE_WIDTH / 2} width={DEVICE_WIDTH}>
                <LineChart.Path color={chartChangedColor} />
                <LineChart.CursorCrosshair color={chartChangedColor} />
              </LineChart>
            </View>
            <View style={[styles.flexRow, styles.coinStatusesView]}>
              <LabelValueCard data={currencies?.slice(0, 2)} width="48%" />
              <LabelValueCard data={currencies?.slice(2, 4)} width="48%" />
            </View>
            <View style={styles.priceConverterContainer}>
              <Text style={styles.priceConverterTitle}>Price Converter</Text>
              <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                  <Text style={{ color: "white", alignSelf: "center" }}>
                    {symbol.toUpperCase()}
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={coinValue.toString()}
                    keyboardType="numeric"
                    onChangeText={handleChangeCoinValue}
                  />
                </View>
                <View style={{ flexDirection: "row", flex: 1 }}>
                  <Text style={{ color: "white", alignSelf: "center" }}>
                    USD
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={usdValue.toString()}
                    keyboardType="numeric"
                    onChangeText={handleChangeUsdValue}
                  />
                </View>
              </View>
            </View>
            <View style={{ gap: 18, marginVertical: 30 }}>
              <View style={(styles.flexRow, styles.labelValueView)}>
                <Text style={{ color: PRIMARY_GRAY_COLOR }}>Daily Change:</Text>
                <Text
                  style={{
                    color:
                      price_change_percentage_24h < 0
                        ? PRIMARY_RED_COLOR
                        : PRIMAry_GREEN_COLOR,
                  }}
                >
                  {price_change_percentage_24h?.toFixed(2)} %
                </Text>
              </View>

              <View style={(styles.flexRow, styles.labelValueView)}>
                <Text style={{ color: PRIMARY_GRAY_COLOR }}>Current Price</Text>
                <Text style={{ color: "#fff" }}>{current_price?.usd}</Text>
              </View>
              <View style={(styles.flexRow, styles.labelValueView)}>
                <Text style={{ color: PRIMARY_GRAY_COLOR }}>Up Votes</Text>
                <Text style={{ color: "#fff" }}>
                  {sentiment_votes_up_percentage} %
                </Text>
              </View>
              <View style={(styles.flexRow, styles.labelValueView)}>
                <Text style={{ color: PRIMARY_GRAY_COLOR }}>Down Votes</Text>
                <Text style={{ color: "#fff" }}>
                  {sentiment_votes_down_percentage} %
                </Text>
              </View>
              <View style={(styles.flexRow, styles.labelValueView)}>
                <Text style={{ color: PRIMARY_GRAY_COLOR }}>
                  Watchlist Portfolio Users
                </Text>
                <Text style={{ color: "#fff" }}>
                  {watchlist_portfolio_users}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() =>
                  setDescriptionLines(descriptionLines === 3 ? undefined : 3)
                }
              >
                <Text
                  numberOfLines={descriptionLines}
                  style={{ color: PRIMARY_GRAY_COLOR }}
                >
                  {description}
                </Text>
              </TouchableOpacity>
            </View>
            {isTrading ? (
              <View
                style={[
                  styles.flexRow,
                  {
                    gap: 16,
                  },
                ]}
              >
                <CustomButton
                  title="Sell"
                  style={{
                    width: "30%",
                    backgroundColor: PRIMARY_RED_COLOR,
                  }}
                  onPress={() => null}
                />
                <CustomButton
                  title="Buy"
                  style={{
                    width: "65%",
                  }}
                  onPress={() => setIsTrading(false)}
                />
              </View>
            ) : (
              <CustomButton title="Trade" onPress={() => setIsTrading(true)} />
            )}
          </LineChartProvider>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
