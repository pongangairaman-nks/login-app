import { useState } from "react";
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { welcomeScreenStyles } from "../components/styles";

export default function WelcomeScreen({ route }) {
  const { name } = route.params;

  return (
    <SafeAreaView style={{ backgroundColor: "#e8ecf4", flex: 1 }}>
      <View style={welcomeScreenStyles.container}>
        <View style={welcomeScreenStyles.header}>
          <Text style={welcomeScreenStyles.title}>Welcome {name}!</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
