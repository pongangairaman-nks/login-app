import { useState } from "react";
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen({ route }) {
  const navigation = useNavigation();

  const { name } = route.params;

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormAction = () => {
    // alert("Logged in successfully");
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#e8ecf4", flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome {name}!</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    marginVertical: 36,
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    marginTop: 10,
    textAlign: "center",
    color: "#1e1e1e",
  },
});
