import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Card from "../components/Card";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber == exclude) {
    generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = ({ choiceNumber }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, choiceNumber)
  );
  return (
    <Card>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Text>GameScreen</Text>
      </View>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Text>Opponent's Guess : {currentGuess}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginVertical: 10,
        }}
      >
        <Button title="Lower" />
        <Button title="Greater" />
      </View>
    </Card>
  );
};

export default GameScreen;
