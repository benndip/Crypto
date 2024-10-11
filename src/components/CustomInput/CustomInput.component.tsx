import { PRIMARY_BLUE_COLOR, PRIMARY_DARK_BLUE_COLOR, PRIMARY_GRAY_COLOR } from "@utils/colors";
import { DEVICE_HEIGHT } from "@utils/sizes";
import React, { ReactNode, useState } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import styles from "./CustomInput.styles";

interface IProps extends TextInputProps {
  leftIcon?: () => ReactNode;
  rightIcon?: () => ReactNode;
  value?: string;
  onChangeText?: ((text: string) => void) | undefined;
  errorText: string
}

const CustomInput = ({
  leftIcon,
  rightIcon,
  value,
  onChangeText,
  errorText,
  ...props
}: IProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <View
        style={{
          height: DEVICE_HEIGHT * 0.062,
          borderColor: isFocused ? PRIMARY_BLUE_COLOR : PRIMARY_GRAY_COLOR, 
          borderWidth: isFocused ? 1.5 : 0.7, 
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        <View style={styles.icon}>{leftIcon?.() && leftIcon?.()}</View>
        <TextInput
          style={{
            height: "100%",
            color: PRIMARY_DARK_BLUE_COLOR,
            width:
              (leftIcon?.() && rightIcon?.()) || !leftIcon?.() || !rightIcon?.()
                ? "100%"
                : "80%",
          }}
          onFocus={() => setIsFocused(true)} // Set focus to true
          onBlur={() => setIsFocused(false)}  // Set focus to false when input is blurred
          placeholderTextColor={PRIMARY_GRAY_COLOR}
          autoCapitalize='none'
          autoCorrect={false}
          spellCheck={false}
          onChangeText={onChangeText}
          value={value}
          {...props}
        />
        <View style={styles.rightIcon}>{rightIcon?.() && rightIcon?.()}</View>
      </View>
      <Text style={styles.errorText}>{errorText}</Text>
    </>
  );
};

export default CustomInput;
