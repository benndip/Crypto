import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";
import FavouritesProvider from "./src/context/FavouritesProvider";
import { RecoilRoot } from "recoil";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
      <NavigationContainer
      theme={{
        colors: {
          background: "#121212",
        },
      }}
      >
        <RecoilRoot>
          <FavouritesProvider>
            <Navigation />
            <StatusBar style="light" />
          </FavouritesProvider>
        </RecoilRoot>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
