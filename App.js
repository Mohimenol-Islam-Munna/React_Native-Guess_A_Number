import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// components/screens
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

const App = () => {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (validNumber) => {
    setUserNumber(validNumber);
    console.log("game start ");
  };

  let content = <StartGameScreen startGameHandler={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen choiceNumber={userNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header>Guess A Number</Header>
      {content}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
});
