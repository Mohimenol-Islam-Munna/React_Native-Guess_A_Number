import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const Input = ({ value, inputChanageHandler, placeholder }) => {
  return (
    <TextInput
      style={styles.textInput}
      value={value}
      onChangeText={inputChanageHandler}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    border: "1px solid gray",
    padding: 10,
    borderRadius: 20,
  },
});

export default Input;
