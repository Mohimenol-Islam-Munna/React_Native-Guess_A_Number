import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// components/screen
import Card from "../components/Card";
import Color from "../theme/color";
import Input from "../components/Input";

const StartGameScreen = () => {
  const [inputNumber, setInputNumber] = useState("");

  const inputChanageHandler = (enteredValue) => {
    setInputNumber(enteredValue);
  };

  console.log("inputNumber ::", inputNumber);

  return (
    <View style={styles.screen}>
      <Text>Start New Game</Text>
      <Card>
        <Input
          value={inputNumber}
          inputChanageHandler={inputChanageHandler}
          placeholder="please input your number"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="reset"
              color={Color.secondary}
              onPress={() => {
                setInputNumber("");
              }}
            />
          </View>

          <View style={styles.button}>
            <Button
              title="confirm"
              color={Color.primary}
              onPress={() =>
                console.log("confirm button :: inputNumber ::", inputNumber)
              }
            />
          </View>
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

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  button: {
    width: 90,
  },
});

export default StartGameScreen;
