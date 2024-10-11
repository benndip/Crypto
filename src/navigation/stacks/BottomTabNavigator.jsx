import { Entypo, FontAwesome, Foundation } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DEVICE_HEIGHT } from "@utils/sizes";
import React from "react";
import { Platform } from "react-native";
import { Portfolio, Favourites, Home } from "src/screens";
import PortfolioStackNavigator from "./PortfolioStackNavigator";
import { paths } from "src/constants/paths";

const Tab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "#181818",
          paddingBottom: Platform.OS === 'ios' ?  DEVICE_HEIGHT * 0.025 : DEVICE_HEIGHT * 0.01,
          height: Platform.OS === 'ios' ? 'auto' : DEVICE_HEIGHT*0.08
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          //color viene de las screenOptions
          tabBarIcon: ({ focused, color, size }) => (
            <Entypo name="home" size={focused ? 28 : size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={paths.PORTFOLIOSTACKNAVIGATOR}
        component={PortfolioStackNavigator}
        options={{
          tabBarIcon: ({ focused, color,size }) => (
            <Foundation
              name="graph-pie"
              size={focused ? 35 : size}
              color={color}
            />
          ),
          title: 'Portfolio'
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          //color viene de las screenOptions
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome name="star" size={focused ? 28 : size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
