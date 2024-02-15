import { useState } from "react";
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { loginScreenStyles } from "../components/styles";

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInNavigation = () => {
    navigation.navigate("SignUp");
  };

  const handleFormAction = () => {
    setEmail("");
    setPassword("");
    navigation.navigate("Welcome", { name: email });
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#e8ecf4", flex: 1 }}>
      <View style={loginScreenStyles.container}>
        <View style={loginScreenStyles.header}>
          <Image
            source={{ uri: "https://withfra.me/android-chrome-512x512.png" }}
            style={loginScreenStyles.headerImage}
            alt="Logo"
          />
          <Text style={loginScreenStyles.title}>Sign In to My App</Text>
          <Text style={loginScreenStyles.subtitle}>Test App</Text>
        </View>
        <View style={loginScreenStyles.form}>
          <View style={loginScreenStyles.inputContainer}>
            <Text style={loginScreenStyles.inputLabel}>Email</Text>
            <TextInput
              style={loginScreenStyles.input}
              placeholder="Please enter your email"
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View style={loginScreenStyles.inputContainer}>
            <Text style={loginScreenStyles.inputLabel}>Password</Text>
            <TextInput
              secureTextEntry
              style={loginScreenStyles.input}
              placeholder="Please enter your password"
              value={password}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <View style={loginScreenStyles.formAction}>
            <TouchableOpacity onPress={() => handleFormAction()}>
              <View style={loginScreenStyles.actionBtn}>
                <Text style={loginScreenStyles.btnFont}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={loginScreenStyles.formFooter}>
            {/* <View> */}
            <Text style={loginScreenStyles.formFooterText}>Don't have an acoount? </Text>
            <TouchableOpacity onPress={() => handleSignInNavigation()}>
              <Text style={loginScreenStyles.formFooterBtnText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
