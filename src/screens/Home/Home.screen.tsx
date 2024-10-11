import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CoinCard from "./../../components/CoinCard";
import { getMarketData } from "./../../services/requests";

export default function HomeScreen() {
  const [coins, setCoins] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchCoins = async (page = 1) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const coinsData = await getMarketData(page);
    if(coinsData)
      setCoins((prevCoins: any) => [...prevCoins, ...coinsData]);
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={coins}
        renderItem={({ item }) => <CoinCard marketCoin={item} />}
        onEndReached={() => fetchCoins(coins.length / 50 + 1)}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            tintColor="white"
            onRefresh={refetchCoins}
          />
        }
      />
    </SafeAreaView>
  );
}
