import { Text, View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { welcomeScreenStyles } from "../components/styles";
import { colors } from "../components/styles";

export default function WelcomeScreen({ route }) {
  const { name } = route.params;

  return (
    <SafeAreaView style={{ backgroundColor: colors.lightBackground, flex: 1 }}>
      <View style={welcomeScreenStyles.container}>
        <View style={welcomeScreenStyles.header}>
          <Text style={welcomeScreenStyles.title}>Welcome "{name || "Guest User"}" !</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
