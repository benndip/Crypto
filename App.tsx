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

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    DriodSans: require("./assets/fonts/DroidSans.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size={"large"} />;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer
          theme={{
            colors: {
              background: "#121212",
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
