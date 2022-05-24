import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Start New Game</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="please put your number"
        />
        <View style={styles.buttonContainer}>
          <Button title="reset" color="salmon" />
          <Button title="confirm" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },

  inputContainer: {
    width: 300,
    maxWidth: "80%",
    backgroundColor: "white",
    marginVertical: 15,
    padding: 15,
    shadowColor: "balck",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 50,
    border: "1px solid grey",
    borderRadius: 5,
  },

  textInput: {
    border: "1px solid gray",
    padding: 10,
    borderRadius: 20,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
});

export default StartGameScreen;
