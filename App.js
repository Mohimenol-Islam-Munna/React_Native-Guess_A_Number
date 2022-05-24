import React from "react";
import { StyleSheet, Text, View } from "react-native";

// components/screens
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";

const App = () => {
  return (
    <View style={styles.screen}>
      <Header>Guess A Number</Header>
      <StartGameScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
