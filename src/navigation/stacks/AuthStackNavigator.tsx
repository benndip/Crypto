import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Account, Login, Signup } from '../../screens';
import { AuthStackParamList } from '../types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator