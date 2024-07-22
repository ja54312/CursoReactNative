import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "../../src/components/LoginForm";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hola DEVICE</Text>
      <Text>Hola Mundo</Text>
      <LoginForm />
    </View>
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
