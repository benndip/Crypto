import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackParamList } from '../types';
import { Home, CoinDetail } from '../../screens';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="CointDetail" component={CoinDetail} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator