import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";
import FavouritesProvider from "./src/context/FavouritesProvider";
import { RecoilRoot } from "recoil";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "src/redux/store";
import { PRIMARY_DARK_BLUE_COLOR } from "@utils/colors";

export default function App() {
  // let [loaded] = useFonts({
  //   // Inter_900Black,
  //   DroidSans: require("./assets/fonts/DroidSans.ttf"),
  // });

  // if (!loaded) {
  //   return <ActivityIndicator size={"large"} />;
  // }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer
          theme={{
            colors: {
              background: PRIMARY_DARK_BLUE_COLOR,
              primary: "",
              card: "",
              text: "",
              border: "",
              notification: "",
            },
            dark: true,
          }}
        >
          <RecoilRoot>
            <FavouritesProvider>
              <Navigation />
              <StatusBar style="light" />
            </FavouritesProvider>
          </RecoilRoot>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}
