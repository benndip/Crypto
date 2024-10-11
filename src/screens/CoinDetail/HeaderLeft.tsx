import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { PRIMARY_GRAY_COLOR } from "@utils/colors";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const HeaderLeft = (props: any) => {
  const navigation = useNavigation();
  const { image, symbol, marketCapRank, name } = props;
  return (
    <View style={[styles.flexRow, { gap: 14 }]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="#fff" />
      </TouchableOpacity>
      <View style={styles.currencyView}>
        <Image source={{ uri: image }} style={{ width: 25, height: 25 }} />
      </View>
      <View style={{ gap: 2 }}>
        <Text style={styles.text}>{symbol?.toUpperCase()}</Text>
        <View style={[styles.flexRow, { gap: 3 }]}>
          <Text
            style={[
              styles.text,
              {
                fontSize: 12,
                color: PRIMARY_GRAY_COLOR,
              },
            ]}
          >
            {name}
          </Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 12,
                color: PRIMARY_GRAY_COLOR,
              },
            ]}
          >
            #{marketCapRank}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderLeft;
