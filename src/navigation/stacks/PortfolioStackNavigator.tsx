import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { paths } from "src/constants/paths";
import { AddNewAsset, Portfolio } from "../../screens";
import { PortfolioStackParamList } from "../types";

const Stack = createNativeStackNavigator<PortfolioStackParamList>();

const PortfolioStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={paths.PORTFOLIO} component={Portfolio} />
      <Stack.Screen name={paths.ADDNEWASSET} component={AddNewAsset} />
    </Stack.Navigator>
  );
};

export default PortfolioStackNavigator;
