import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import BottomNavigator from './stacks/BottomNavigator';
import AuthStackNavigator from './stacks/AuthStackNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='BottomTabNavigator'>
        <Stack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
        <Stack.Screen name="BottomTabNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  )
}

export default MainNavigator