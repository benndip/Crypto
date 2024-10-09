import { NavigatorScreenParams } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Splash: undefined;
    Login: undefined;
    Signup: undefined;
    BottomTabNavigator: NavigatorScreenParams<BottomTabParamList>
    
}

export type HomeStackParamList = {
    Home: undefined;
}

export type PortfolioStackParamList = {
    Porfolio: undefined;
}

export type AccountStackParamList = {
    Account: undefined;
}

export type BottomTabParamList = {
    HomeStackNavigator: NavigatorScreenParams<HomeStackParamList>;
    PorfolioStackNavigator: NavigatorScreenParams<PortfolioStackParamList>;
    AccountStackNavigator: NavigatorScreenParams<AccountStackParamList>;
}