import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PortfolioStackParamList } from '../types';
import { Portfolio } from '../../screens';

const Stack = createNativeStackNavigator<PortfolioStackParamList>();

const PortfolioStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Porfolio" component={Portfolio} />
    </Stack.Navigator>
  )
}

export default PortfolioStackNavigator