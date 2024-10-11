// @ts-nocheck
import React, { useEffect, useRef } from 'react'
import { Text, SafeAreaView } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import styles from './Splash.styles';
import { getValueFor } from '@utils/helpers';
import { setUser } from 'src/redux/reducers/authSlice';

import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';


const Splash = ({ navigation }) => {

  const dispatch = useAppDispatch()
  const animation = useRef<LottieView>(null);

  
  const checkRouteToGo = async () => {
      let user = await getValueFor('user')
      if(user){
        dispatch(setUser(user)) 
        navigation.navigate('BottomTabNavigator')
      }else{
        navigation.navigate("AuthStackNavigator");
      }
  };
   
  useEffect(() => {

    let timeOut = setTimeout(() => {
        checkRouteToGo();
    }, 3000);
    
    return () => {
        clearTimeout(timeOut)
    }
    
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 400,
          height: 400,
          backgroundColor: "#eee",
        }}
        source={require("@assets/lotties/Animation - 1728622902051.json")}
      />
      <Text style={styles.poweredByText}> Powered by <Text style={{ fontWeight: '700', fontSize: 25 }}>Crypto Lordz </Text> </Text>
    </SafeAreaView>
  );
}

export default Splash
