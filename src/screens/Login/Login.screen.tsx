import { Email, Eye, EyeOff, Lock } from "@assets/icons/icons";
import {
  PRIMARY_DARK_BLUE_COLOR,
  PRIMARY_GRAY_COLOR,
  SECONDARY_BLUE_COLOR,
} from "@utils/colors";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { paths } from "src/constants/paths";
import { CustomButton, CustomInput } from "../../components";
import styles from "./Login.styles";
import { DEVICE_HEIGHT } from "@utils/sizes";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  const handleLogin = () => {};

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: PRIMARY_DARK_BLUE_COLOR,
        justifyContent: "space-between",
      }}
    >
      <StatusBar translucent style="dark" />
      <Image
        source={require("../../../assets/images/338.jpg")}
        // resizeMode="contain"
        style={{
          width: "100%",
          height: DEVICE_HEIGHT * 0.35,
        }}
        borderBottomRightRadius={20}
        borderBottomLeftRadius={20}
      />
      <ScrollView
        contentContainerStyle={{
          paddingTop: DEVICE_HEIGHT * 0.06,
        }}
        style={{ zIndex: 2 }}
      >
        <View style={{ padding: 20, bottom: DEVICE_HEIGHT * 0.06 }}>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 30,
              padding: 24,
              gap: 16,
            }}
          >
            <View style={{ gap: 16, marginBottom: 2 }}>
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
                        color={
                          password?.length > 0 ? "#fff" : PRIMARY_GRAY_COLOR
                        }
                      />
                    ) : (
                      <EyeOff
                        color={
                          password?.length > 0 ? "#fff" : PRIMARY_GRAY_COLOR
                        }
                      />
                    )}
                  </TouchableOpacity>
                )}
              />
            </View>
            <TouchableOpacity
              style={{ alignSelf: "flex-end" }}
              onPress={() => null}
            >
              <Text
                style={[
                  styles.accountText,
                  {
                    color: "#fff",
                  },
                ]}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <CustomButton
              title="Sign In"
              onPress={handleLogin}
              style={{
                marginTop: DEVICE_HEIGHT * 0.05,
              }}
            />
            <View
              style={[styles.flexRow, { alignSelf: "center", marginTop: 2 }]}
            >
              <Text
                style={[
                  styles.accountText,
                  { marginRight: 10, color: PRIMARY_GRAY_COLOR },
                ]}
              >
                Don’t have an account yet?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(paths.SIGNUP)}
              >
                <Text style={[styles.accountText]}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.bottomSection}>
          <Text style={styles.continueText}>continue with</Text>
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
    </View>
  );
};

export default Login;
