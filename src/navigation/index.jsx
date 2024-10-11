import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AddNewAsset, Splash, CoinDetail } from "src/screens";
import AuthStackNavigator from "./stacks/AuthStackNavigator";
import BottomTabNavigator from "./stacks/BottomTabNavigator";
import { paths } from "src/constants/paths";
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={paths.SPLASH}
    >
      <Stack.Screen name={paths.SPLASH} component={Splash} />
      <Stack.Screen
        name={paths.AUTHSTACKNAVIGATOR}
        component={AuthStackNavigator}
      />
      <Stack.Screen
        name={paths.BOTTOMTABNAVIGATOR}
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={paths.COINDETAIL}
        component={CoinDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={paths.ADDNEWASSET}
        component={AddNewAsset}
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
