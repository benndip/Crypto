import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { paths } from "src/constants/paths";
import { AddNewAsset, Portfolio } from "../../screens";
import { PortfolioStackParamList } from "../types";
import { PRIMARY_DARK_BLUE_COLOR } from "@utils/colors";

const Stack = createNativeStackNavigator<PortfolioStackParamList>();

const PortfolioStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: PRIMARY_DARK_BLUE_COLOR,
        },
        headerTintColor: "#fff",
        headerShadowVisible: false
      }}
    >
      <Stack.Screen name={paths.PORTFOLIO} component={Portfolio} />
      <Stack.Screen
        name={paths.ADDNEWASSET}
        options={{
          headerShown: true,
          title: 'Add Asset'
        }}
        component={AddNewAsset}
      />
    </Stack.Navigator>
  );
};

export default PortfolioStackNavigator;
