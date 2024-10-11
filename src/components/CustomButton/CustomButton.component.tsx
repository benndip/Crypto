import { DEVICE_HEIGHT } from "@utils/sizes";
import React from "react";
import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import styles from "./CustomButton.style";
import {
  PRIMARY_BLUE_COLOR,
  PRIMARY_DISABLED_COLOR,
  SECONDARY_DISABLED_COLOR,
} from "@utils/colors";

interface IProps {
  title: string;
  textStyle?: TextStyle;
  style?: ViewStyle;
  onPress: () => void;
  disabled?: boolean;
}

const CustomButton = ({
  title,
  textStyle,
  style,
  onPress,
  disabled,
}: IProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          height: DEVICE_HEIGHT * 0.062,
          backgroundColor: disabled
            ? PRIMARY_DISABLED_COLOR
            : PRIMARY_BLUE_COLOR,
          ...style,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={{
          color: disabled ? SECONDARY_DISABLED_COLOR : "#fff",
          ...textStyle,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
