import { useState } from "react";
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../components/styles";

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignInNavigation = () => {
    // alert("Logged in successfully");
    navigation.navigate("Login");
  };

  const handleFormAction = () => {
    navigation.navigate("Welcome", { name: email });
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#e8ecf4", flex: 1 }}>
      {/* <StatusBar style="dark" /> */}
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{ uri: "https://withfra.me/android-chrome-512x512.png" }}
            style={styles.headerImage}
            alt="Logo"
          />
          <Text style={styles.title}>Sign Up to My App</Text>
          <Text style={styles.subtitle}>Test App</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Please enter your email"
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              secureTextEntry
              style={styles.input}
              placeholder="Please enter your password"
              value={password}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <TextInput
              secureTextEntry
              style={styles.input}
              placeholder="Please enter your password"
              value={confirmPassword}
              onChangeText={(password) => setConfirmPassword(password)}
            />
          </View>
          <View style={styles.formAction}>
            <TouchableOpacity onPress={() => handleFormAction()}>
              <View style={styles.actionBtn}>
                <Text style={styles.btnFont}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.formFooter}>
            <Text style={styles.formFooterText}>Have an acoount? </Text>
            <TouchableOpacity onPress={() => handleSignInNavigation()}>
              <Text style={styles.formFooterBtnText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 24,
  },
  header: {
    marginVertical: 36,
  },
  headerImage: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    marginTop: 10,
    textAlign: "center",
    color: colors.darkGrey,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    color: colors.grey,
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    marginVertical: 12,
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    backgroundColor: colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: 15,
    color: colors.textInput,
    height: 42,
    borderRadius: 6,
  },
  formAction: {
    marginTop: 30,
  },
  actionBtn: {
    backgroundColor: colors.lightBackground,
    paddingVertical: 14,
    borderRadius: 5,
  },
  btnFont: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  formFooter: {
    marginTop: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 30,
  },
  formFooterText: {
    fontSize: 16,
    alignItems: "center",
    alignContent: "center",
  },
  formFooterBtnText: {
    color: colors.secondary,
    fontSize: 15,
    fontWeight: "500",
    textDecorationLine: "underline",
    marginBottom: -15,
  },
});
