import { Email, Eye, EyeOff, Lock } from "@assets/icons/icons";
import {
  PRIMARY_BLUE_COLOR,
  PRIMARY_DARK_BLUE_COLOR,
  PRIMARY_GRAY_COLOR,
} from "@utils/colors";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { paths } from "src/constants/paths";
import { CustomButton, CustomInput } from "../../components";
import styles from "./Login.styles";
import { DEVICE_HEIGHT } from "@utils/sizes";
import { supabase } from "src/services/supabase";
import { isValidEmail } from "@utils/helpers";
import { setUser } from "src/redux/reducers/authSlice";
import { useAppDispatch } from "src/redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }: any) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const [loading, setLoading] = useState(false);

  const [emailErrorText, setEmailErrorText] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");

  const clearErrorStates = () => {
    setEmailErrorText("");
    setPasswordErrorText("")
  }

  const dispatch = useAppDispatch()

  const handleLogin = async () => {
    clearErrorStates()
    setLoading(true);
    let hasError = false;
    if (!isValidEmail(email)) {      
      setEmailErrorText("Please enter a valid email address");
      hasError = true;
    }
    if (password.length < 6) {
      setPasswordErrorText("Please enter a strong password");
      hasError = true;
    }
    if (hasError) {
      setLoading(false);
      return;
    }
    await supabase.auth
      .signInWithPassword({
        email: email,
        password: password,
      })
      .then((res) => {
        const user = res.data.user;
        console.log(user);
        
        const error = res.error
        if(error){
          return Alert.alert(error.message, "Please check your email and password and try again");
        }
        dispatch(setUser(user));
        AsyncStorage.setItem("session", JSON.stringify(user));
        navigation.navigate("BottomTabNavigator");
      })
      .catch((error) => {
        return Alert.alert("Something Unexpected Happended!", error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
          <Text style={styles.heading}>Welcome Back</Text>
          <Text style={styles.caption}>
            Log in to continue exploring and managing your personalized
            experience.
          </Text>
          <View style={{ gap: 16, marginBottom: 2, marginTop: 30 }}>
            <CustomInput
              placeholder="Email"
              onChangeText={(text: string) => setEmail(text)}
              value={email}
              keyboardType="email-address"
              leftIcon={() => (
                <Email
                  color={email?.length == 0 ? "#ccc" : PRIMARY_GRAY_COLOR}
                />
              )}
              errorText={emailErrorText}
            />
            <CustomInput
              placeholder="Password"
              value={password}
              onChangeText={(text: string) => setPassword(text)}
              leftIcon={() => (
                <Lock
                  color={password?.length == 0 ? "#ccc" : PRIMARY_GRAY_COLOR}
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
                      color={password?.length == 0 ? "#ccc" : PRIMARY_GRAY_COLOR}
                    />
                  ) : (
                    <EyeOff
                      color={password?.length == 0 ? "#ccc" : PRIMARY_GRAY_COLOR}
                    />
                  )}
                </TouchableOpacity>
              )}
              errorText={passwordErrorText}
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
          {
             loading ?
             <ActivityIndicator style={{ marginTop: DEVICE_HEIGHT * 0.05 }} color={PRIMARY_BLUE_COLOR} />
             :
            <CustomButton
              title="Sign In"
              onPress={handleLogin}
              style={{
                marginTop: DEVICE_HEIGHT * 0.05,
              }}
            />
          }
          <View
            style={[styles.flexRow, { alignSelf: "center", marginTop: 16 }]}
          >
            <Text
              style={[
                styles.accountText,
                { marginRight: 5, color: PRIMARY_GRAY_COLOR },
              ]}
            >
              Don’t have an account yet?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate(paths.SIGNUP)}>
              <Text style={[styles.accountText]}>Signup</Text>
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
