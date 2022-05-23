import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Title from "./components/Title";

const App = () => {
  return (
    <View style={styles.container}>
      <Title>Guess A Number</Title>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
