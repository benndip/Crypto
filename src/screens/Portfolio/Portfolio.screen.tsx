import React, { Suspense } from "react";
import { View, Text, ActivityIndicator, Platform } from "react-native";
import PortfolioList from "../../components/PortfolioList";
import { DEVICE_HEIGHT } from "@utils/sizes";

export default function PortfolioScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        paddingTop: Platform.OS === "ios" ? 0 : DEVICE_HEIGHT * 0.06,
        paddingHorizontal: 10
      }}
    >
      <Suspense
        fallback={
          <Text style={{ color: "white", alignSelf: "center" }}>
            <ActivityIndicator />
          </Text>
        }
      >
        <PortfolioList />
      </Suspense>
    </View>
  );
}
