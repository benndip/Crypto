import { PRIMARY_GRAY_COLOR } from "@utils/colors";
import React, { FC } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import { AuthLayoutProps } from "./types";

const AuthLayout: FC<AuthLayoutProps> = ({ children, caption, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>{title}</Text>
        <Text
          style={[
            styles.accountText,
            {
              color: PRIMARY_GRAY_COLOR,
              paddingBottom: 3,
            },
          ]}
        >
          {caption}
        </Text>
        <View>{children}</View>
      </View>
    </View>
  );
};

export default AuthLayout;
