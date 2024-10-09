import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../types';
import HomeStackNavigator from './HomeStackNavigator';
import AccountStackNavigator from './AccountStackNavigator';
import PortfolioStackNavigator from './PortfolioStackNavigator';
import CustomTab from '../../components/CustomTab/CustomTab.component';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTab {...props} />}
    >
      <Tab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="PorfolioStackNavigator"
        component={PortfolioStackNavigator}
        options={{ title: "Portfolio" }}
      />
      <Tab.Screen
        name="AccountStackNavigator"
        component={AccountStackNavigator}
        options={{ title: "Account" }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigator