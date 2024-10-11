import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoinDetail from "./../screens/CoinDetail";
import BottomTabNavigator from "./stacks/BottomTabNavigator";
import AddNewAssetScreen from "../screens/AddNewAsset";
import AuthStackNavigator from "./stacks/AuthStackNavigator";
import { Splash } from "src/screens";
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CoinDetail"
        component={CoinDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddNewAssetScreen"
        component={AddNewAssetScreen}
        options={{
          title: "Add New Asset",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}
export default Navigation;
