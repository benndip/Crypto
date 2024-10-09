import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AccountStackParamList } from '../types';
import { Account } from '../../screens';

const Stack = createNativeStackNavigator<AccountStackParamList>();

const AccountStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  )
}

export default AccountStackNavigator