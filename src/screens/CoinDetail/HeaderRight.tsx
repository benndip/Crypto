import { AntDesign } from "@expo/vector-icons";
import {
  PRIMARY_GRAY_COLOR,
  PRIMAry_GREEN_COLOR,
  SECONDARY_BLUE_COLOR,
} from "@utils/colors";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useFavourites } from "src/context/FavouritesProvider";
import { LineChart } from "react-native-wagmi-charts";

const HeaderRight = (props: any) => {
  const { coinId, currentPrice, priceChangePercentage24h } = props;
  const { favouritesCoinIds, storeFavouritesCoinId, removeFavouritesCoinId } =
    useFavourites();

  const checkIfIsFavourite = () =>
    favouritesCoinIds.some((coinIdValue: any) => coinIdValue === coinId);

  const handleFavouriteCoin = () => {
    if (checkIfIsFavourite()) {
      return removeFavouritesCoinId(coinId);
    }
    return storeFavouritesCoinId(coinId);
  };

  const percentageColor = priceChangePercentage24h < 0 ? "#ea3943" : "#16c784";

  return (
    <View style={[styles.flexRow, { gap: 20 }]}>
      <View style={{ gap: 2 }}>
        <Text style={styles.text}>$ {currentPrice}</Text>
        <View
          style={[
            styles.flexRow,
            {
              justifyContent: "flex-end",
            },
          ]}
        >
          <AntDesign
            name={priceChangePercentage24h < 0 ? "caretdown" : "caretup"}
            size={8}
            color={percentageColor}
            style={{ marginRight: 5 }}
          />
          <Text
            style={[
              styles.text,
              {
                fontSize: 12,
                color: percentageColor,
                textAlign: "right",
              },
            ]}
          >
            {priceChangePercentage24h?.toFixed(2)}%
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.currencyView,
          {
            backgroundColor: SECONDARY_BLUE_COLOR,
          },
        ]}
        onPress={handleFavouriteCoin}
      >
        <AntDesign
          name={checkIfIsFavourite() ? "star" : "staro"}
          size={16}
          color={checkIfIsFavourite() ? "#FFBF00" : "white"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;
