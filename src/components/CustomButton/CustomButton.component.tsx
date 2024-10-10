import { DEVICE_HEIGHT } from "@utils/sizes";
import React from "react";
import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import styles from "./CustomButton.style";

interface IProps {
  title: string;
  textStyle?: TextStyle;
  style?: ViewStyle;
  onPress: () => void;
}

const CustomButton = ({ title, textStyle, style, onPress }: IProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          height: DEVICE_HEIGHT * 0.062,
          ...style,
        },
      ]}
      onPress={onPress}
    >
      <Text style={{ color: "#fff", ...textStyle }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
