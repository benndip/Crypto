import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { CoinType } from "../../types";
import ChangeItem from "../ChangeItem/ChangeItem.component";
import styles from "./TrendingCryptoItem.style";

interface IProps {
  coin: CoinType;
  onPress: () => void;
}

const TrendingCryptoItem: React.FC<IProps> = ({ coin, onPress }) => {
  const {
    name,
    symbol,
    image,
    current_price,
    price_change_percentage_24h,
  } = coin;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.topContent}>
        <View style={styles.iconAndTextsContainer}>
          <Image source={{ uri: image }} style={styles.coinIcon} />
          <View style={styles.textsContainer}>
            <Text style={styles.symbol}>{symbol?.toUpperCase()}</Text>
            <Text style={styles.name}>{name}</Text>
          </View>
        </View>
        <View style={styles.priceAndChangeContainer}>
          <Text style={styles.currentPrice}>${current_price}</Text>
          <ChangeItem
            value={price_change_percentage_24h}
            showPercentage
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TrendingCryptoItem;
