import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CustomButton, CustomInput } from "../../components";
import { Email, Eye, EyeOff, Lock } from "@assets/icons/icons";
import styles from "../Login/Login.styles";
import AuthLayout from "src/layouts/auth-layout/AuthLayout";
import { PRIMARY_GRAY_COLOR } from "@utils/colors";
import { paths } from "src/constants/paths";

const Signup = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  const handleLogin = () => {};

  return (
    <AuthLayout
      title="Welcome Back!"
      caption={`Welcome back! We're thrilled to have you here again. Let's pick up where we left off.`}
    >
      <View style={{ gap: 3, marginTop: 10, marginBottom: 4 }}>
        <CustomInput
          placeholder="Email"
          onChangeText={(text: string) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          leftIcon={() => (
            <Email color={email?.length > 0 ? "#fff" : PRIMARY_GRAY_COLOR} />
          )}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          leftIcon={() => (
            <Lock color={password?.length > 0 ? "#fff" : PRIMARY_GRAY_COLOR} />
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
      <TouchableOpacity style={{ alignSelf: "flex-end" }} onPress={() => null}>
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
          marginTop: 12,
        }}
      />
      <View style={[styles.flexRow, { alignSelf: "center", marginTop: 2 }]}>
        <Text
          style={[
            styles.accountText,
            { marginRight: 10, color: PRIMARY_GRAY_COLOR },
          ]}
        >
          Don’t have an account yet?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate(paths.SIGNUP)}>
          <Text style={[styles.accountText]}>Signup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
        <View
          style={{
            position: "relative",
            marginTop: 10,
            marginBottom: 5,
          }}
        >
          <Text style={styles.continueText}>OR CONTINUE WITH</Text>
          <View style={styles.hairline} />
        </View>
        <View style={{ gap: 10 }}>
          <CustomButton
            title={`Sign in with Google`}
            style={{
              borderWidth: 1,
              borderColor: "#fff",
            }}
            onPress={handleLogin}
          />
          {/* <CustomButton
            text='Sign in with Google'
            rightIcon={() => <GoogleIcon />}
            onPress={() => null}
            bgColor='transparent'
            style={{
              borderWidth: 1,
              borderColor: '#fff',
            }}
            color={'#fff'}
          /> */}
        </View>
      </View>
    </AuthLayout>
  );
};

export default Signup;
