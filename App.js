import { Pressable, StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/Login";
import SignUpScreen from "./screens/SignUp";
import WelcomeScreen from "./screens/Welcome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          title: "Welcome",
          headerStyle: {
            backgroundColor: "#075eec",
          },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
          headerRight: () => (
            <Pressable onPress={() => alert("Menu is clicked")}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Menu</Text>
            </Pressable>
          ),
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
