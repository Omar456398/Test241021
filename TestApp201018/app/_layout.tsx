import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { AppProvider } from "../components/ContextProvider";

export default function RootLayout() {
  return (
    <AppProvider>
      <StatusBar barStyle={"dark-content"}></StatusBar>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="signin" />
        <Stack.Screen name="countries" />
        <Stack.Screen name="home" />
      </Stack>
    </AppProvider>
  );
}
