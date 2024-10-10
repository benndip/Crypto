import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
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

const filterDaysArray = [
  { filterDay: "1", filterText: "24h" },
  { filterDay: "7", filterText: "7d" },
  { filterDay: "30", filterText: "30d" },
  { filterDay: "365", filterText: "1y" },
  { filterDay: "max", filterText: "All" },
];

export default function CoinDetail({ route }) {
  const [coin, setCoin] = useState(null);
  const [coinMarketData, setCoinMarketData] = useState(null);
  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUsdValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRange, setSelectedRange] = useState("1");

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
    console.log('fetchedCoinMarketData', fetchedCoinMarketData)
    setCoinMarketData(fetchedCoinMarketData);
  };

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
  } = coin;

  const { prices } = coinMarketData;
  const chartChangedColor =
    current_price.usd > prices[0][1] ? "#16c784" : "#ea3943";

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
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={80}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <LineChartProvider
        data={prices.map(([timestamp, value]) => ({ timestamp, value }))}
      >
        <CoinDetailHeader
          coinId={id}
          image={small}
          symbol={symbol}
          marketCapRank={market_cap_rank}
        />
        <CoinPriceInfo
          name={name}
          currentPrice={current_price}
          priceChangePercentage24h={price_change_percentage_24h}
        />
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
        <LineChart height={screenWidth / 2} width={screenWidth}>
          <LineChart.Path color={chartChangedColor} />
          <LineChart.CursorCrosshair color={chartChangedColor} />
        </LineChart>
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
              <Text style={{ color: "white", alignSelf: "center" }}>USD</Text>
              <TextInput
                style={styles.input}
                value={usdValue.toString()}
                keyboardType="numeric"
                onChangeText={handleChangeUsdValue}
              />
            </View>
          </View>
        </View>
      </LineChartProvider>
    </KeyboardAvoidingView>
  );
}
