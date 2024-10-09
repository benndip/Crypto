import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackParamList } from '../types'
import Home from '../../screens/Home/Home.screen';
import { Details } from 'src/screens';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Details'>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator