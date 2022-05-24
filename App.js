import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";

const App = () => {
  return (
    <View style={styles.screen}>
      <Header>Guess A Number</Header>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
