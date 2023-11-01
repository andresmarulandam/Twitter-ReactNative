import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import Welcome from "./screens/Welcome";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import Create from "./screens/Create";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Welcome />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}