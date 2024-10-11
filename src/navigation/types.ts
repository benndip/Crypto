import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  BottomTabNavigator: NavigatorScreenParams<BottomTabParamList>;
  AuthStackNavigator: NavigatorScreenParams<AuthStackParamList>;
  Login: undefined
  SignUp: undefined
  Splash: undefined
};

export type HomeStackParamList = {
  Home: undefined;
  CointDetail: undefined;
};

export type PortfolioStackParamList = {
  Porfolio: undefined;
};

export type AccountStackParamList = {
  Account: undefined;
};
export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type BottomTabParamList = {
  HomeStackNavigator: NavigatorScreenParams<HomeStackParamList>;
  PorfolioStackNavigator: NavigatorScreenParams<PortfolioStackParamList>;
  AccountStackNavigator: NavigatorScreenParams<AccountStackParamList>;
};
