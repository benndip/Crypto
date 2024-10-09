import { Dimensions, StatusBar } from "react-native";
import Constants from 'expo-constants';

export const {width: DEVICE_WIDTH, height: DEVICE_HEIGHT} = Dimensions.get('screen')
export const statusBarHeight = Constants.statusBarHeight