import { useState } from "react";
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { signUpScreenStyles } from "../components/styles";

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignInNavigation = () => {
    navigation.navigate("Login");
  };

  const handleFormAction = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    navigation.navigate("Welcome", { name: email });
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#e8ecf4", flex: 1 }}>
      <View style={signUpScreenStyles.container}>
        <View style={signUpScreenStyles.header}>
          <Image
            source={{ uri: "https://withfra.me/android-chrome-512x512.png" }}
            style={signUpScreenStyles.headerImage}
            alt="Logo"
          />
          <Text style={signUpScreenStyles.title}>Sign Up to My App</Text>
          <Text style={signUpScreenStyles.subtitle}>Test App</Text>
        </View>
        <View style={signUpScreenStyles.form}>
          <View style={signUpScreenStyles.inputContainer}>
            <Text style={signUpScreenStyles.inputLabel}>Email</Text>
            <TextInput
              style={signUpScreenStyles.input}
              placeholder="Please enter your email"
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View style={signUpScreenStyles.inputContainer}>
            <Text style={signUpScreenStyles.inputLabel}>Password</Text>
            <TextInput
              secureTextEntry
              style={signUpScreenStyles.input}
              placeholder="Please enter your password"
              value={password}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <View style={signUpScreenStyles.inputContainer}>
            <Text style={signUpScreenStyles.inputLabel}>Confirm Password</Text>
            <TextInput
              secureTextEntry
              style={signUpScreenStyles.input}
              placeholder="Please enter your password"
              value={confirmPassword}
              onChangeText={(password) => setConfirmPassword(password)}
            />
          </View>
          <View style={signUpScreenStyles.formAction}>
            <TouchableOpacity onPress={() => handleFormAction()}>
              <View style={signUpScreenStyles.actionBtn}>
                <Text style={signUpScreenStyles.btnFont}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={signUpScreenStyles.formFooter}>
            <Text style={signUpScreenStyles.formFooterText}>Have an acoount? </Text>
            <TouchableOpacity onPress={() => handleSignInNavigation()}>
              <Text style={signUpScreenStyles.formFooterBtnText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
