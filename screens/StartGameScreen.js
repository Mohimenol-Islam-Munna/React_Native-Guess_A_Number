import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

// components/screen
import Card from "../components/Card";

const StartGameScreen = () => {
  const [inputNumber, setInputNumber] = useState("");

  return (
    <View style={styles.screen}>
      <Text>Start New Game</Text>
      <Card>
        <TextInput
          style={styles.textInput}
          value={inputNumber}
          onChangeText={(enterdValue) => {
            setInputNumber(enterdValue);
          }}
          placeholder="please put your number"
        />
        <View style={styles.buttonContainer}>
          <Button
            title="reset"
            color="salmon"
            onPress={() => {
              setInputNumber("");
            }}
          />
          <Button
            title="confirm"
            onPress={() =>
              console.log("confirm button :: inputNumber ::", inputNumber)
            }
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    alignItems: "center",
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
