import { Email, Eye, EyeOff, Lock } from "@assets/icons/icons";
import {
  PRIMARY_BLUE_COLOR,
  PRIMARY_DARK_BLUE_COLOR,
  PRIMARY_GRAY_COLOR,
  SECONDARY_BLUE_COLOR,
} from "@utils/colors";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { paths } from "src/constants/paths";
import { CustomButton, CustomInput } from "../../components";
import styles from "../Login/Login.styles";
import { DEVICE_HEIGHT } from "@utils/sizes";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  const handleLogin = () => {};

  return (
    <ImageBackground
      style={{
        flex: 1,
        backgroundColor: PRIMARY_DARK_BLUE_COLOR,
        justifyContent: "center",
        paddingHorizontal: 10,
      }}
      source={require("../../../assets/images/auth_bg.png")}
    >
      <StatusBar translucent style="light" />
      <ScrollView
        contentContainerStyle={{
          paddingTop: DEVICE_HEIGHT * 0.2,
          paddingBottom: DEVICE_HEIGHT * 0.05,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ padding: 20 }}>
          <Text style={styles.heading}>Signup</Text>
          <Text style={styles.caption}>
          Create an account to unlock exclusive features and get started!
          </Text>
          <View style={{ gap: 16, marginBottom: 2, marginTop: 30 }}>
            <CustomInput
              placeholder="Email"
              onChangeText={(text: string) => setEmail(text)}
              value={email}
              keyboardType="email-address"
              leftIcon={() => (
                <Email
                  color={email?.length > 0 ? "#fff" : PRIMARY_GRAY_COLOR}
                />
              )}
            />
            <CustomInput
              placeholder="Password"
              value={password}
              onChangeText={(text: string) => setPassword(text)}
              leftIcon={() => (
                <Lock
                  color={password?.length > 0 ? "#fff" : PRIMARY_GRAY_COLOR}
                />
              )}
              secureTextEntry={secureTextEntry}
              rightIcon={() => (
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                >
                  {secureTextEntry ? (
                    <Eye
                      color={password?.length > 0 ? "#fff" : PRIMARY_GRAY_COLOR}
                    />
                  ) : (
                    <EyeOff
                      color={password?.length > 0 ? "#fff" : PRIMARY_GRAY_COLOR}
                    />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
          <TouchableOpacity
            style={{ alignSelf: "flex-end", marginTop: 5 }}
            onPress={() => null}
          >
            <Text
              style={[
                styles.accountText,
                {
                  color: PRIMARY_BLUE_COLOR,
                },
              ]}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <CustomButton
            title="Sign up"
            onPress={handleLogin}
            style={{
              marginTop: DEVICE_HEIGHT * 0.05,
            }}
          />
          <View
            style={[styles.flexRow, { alignSelf: "center", marginTop: 16 }]}
          >
            <Text
              style={[
                styles.accountText,
                { marginRight: 5, color: PRIMARY_GRAY_COLOR },
              ]}
            >
              Have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate(paths.LOGIN)}>
              <Text style={[styles.accountText]}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomSection}>
          <TouchableOpacity style={styles.googleButton}>
            <Image
              source={require("../../../assets/images/google.png")}
              resizeMode="contain"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Login;
