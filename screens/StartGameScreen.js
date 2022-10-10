import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  Alert,
} from "react-native";

// components/screen
import Card from "../components/Card";
import Color from "../theme/color";
import Input from "../components/Input";

const StartGameScreen = ({ startGameHandler }) => {
  const [inputNumber, setInputNumber] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [validNumber, setValidNumber] = useState();

  const inputChanageHandler = (enteredValue) => {
    setInputNumber(enteredValue.replace(/[^0-9]/g, ""));
  };

  const resetHandler = () => {
    setInputNumber("");
    setIsConfirmed(false);
    setValidNumber();
  };

  const confirmedHandler = () => {
    const chossenNumber = parseInt(inputNumber);
    if (isNaN(chossenNumber) || chossenNumber <= 0 || chossenNumber > 99) {
      Alert.alert("Invalid Number", "Input number must be between 1 to 99", [
        { text: "ok", style: "destructive", onPress: resetHandler },
      ]);
      setValidNumber();
      return;
    }
    setIsConfirmed(true);
    setValidNumber(chossenNumber);
  };

  let numberText;

  if (validNumber) {
    numberText = (
      <Card style={styles.selectedNumberContainer}>
        <Text style={{ textAlign: "center" }}>Selected Number</Text>
        <View style={styles.selectedNumber}>
          <Text>{validNumber}</Text>
        </View>
        <View style={styles.startGameButton}>
          <Button
            title="Start Game"
            color={Color.primary}
            onPress={()=> startGameHandler(validNumber)}
          />
        </View>
      </Card>
    );
  }

  return (
    // <TouchableWithoutFeedback
    //   onPress={() => {
    //     Keyboard.dismiss();
    //   }}
    // >
    <View style={styles.screen}>
      <Text>Start New Game</Text>
      <Card>
        <Input
          value={inputNumber}
          inputChanageHandler={inputChanageHandler}
          placeholder="number"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="reset"
              color={Color.secondary}
              onPress={resetHandler}
            />
          </View>

          <View style={styles.button}>
            <Button
              title="confirm"
              color={Color.primary}
              onPress={confirmedHandler}
            />
          </View>
        </View>
      </Card>
      {numberText}
    </View>
    // </TouchableWithoutFeedback>
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

  selectedNumberContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedNumber: {
    borderWidth: 1,
    padding: 10,
    borderColor: Color.primary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  startGameButton: {
    flex: 1,
    marginTop: 10,
  },
});

export default StartGameScreen;
