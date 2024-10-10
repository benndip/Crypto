import { PRIMARY_DARK_BLUE_COLOR, PRIMARY_GRAY_COLOR } from "@utils/colors";
import { DEVICE_HEIGHT } from "@utils/sizes";
import React, { ReactNode } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import styles from "./CustomInput.styles";

interface IProps extends TextInputProps {
  leftIcon?: () => ReactNode;
  rightIcon?: () => ReactNode;
  placeholder: string;
  value?: string;
  onChangeText?: ((text: string) => void) | undefined;
}

const CustomInput = ({
  leftIcon,
  rightIcon,
  placeholder,
  value,
  onChangeText,
  ...props
}: IProps) => {
  return (
    <View
      style={{
        height: DEVICE_HEIGHT * 0.06,
        borderColor: PRIMARY_GRAY_COLOR,
        borderWidth: 0.7,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: PRIMARY_DARK_BLUE_COLOR,
      }}
    >
      <View style={styles.icon}>{leftIcon?.() && leftIcon?.()}</View>
      <TextInput
        style={{
          height: "100%",
          color: '#fff',
          width:
            (leftIcon?.() && rightIcon?.()) || !leftIcon?.() || !rightIcon?.()
              ? "100%"
              : "80%",
        }}
        {...props}
      />
      <View style={styles.icon}>{rightIcon?.() && rightIcon?.()}</View>
    </View>
  );
};

export default CustomInput;
