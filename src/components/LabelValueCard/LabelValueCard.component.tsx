import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./LabelValueCard.style";
import { PRIMARY_GRAY_COLOR } from "@utils/colors";

interface IProps {
  data: {
    value: string | number;
    label: string;
  }[];
  width?: number | any;
}

const LabelValueCard = ({ data, width = "100%" }: IProps) => {
  return (
    <View style={[styles.container, { width }]}>
      {data.map((item) => (
        <View
          style={[
            styles.flexRow,
            {
              justifyContent: "space-between",
            },
          ]}
        >
          <Text
            style={[
              styles.text,
              {
                color: PRIMARY_GRAY_COLOR,
              },
            ]}
          >
            {item.label}
          </Text>
          <Text style={styles.text}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
};

export default LabelValueCard;
