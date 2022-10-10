import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const Input = ({ value, inputChanageHandler, placeholder }) => {
  return (
    <TextInput
      style={styles.textInput}
      value={value}
      onChangeText={inputChanageHandler}
      keyboardType="numeric"
      maxLength={2}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: 90,
    marginHorizontal: "auto",
    borderBottomWidth: 1,
    padding: 10,
    borderRadius: 2,
  },
});

export default Input;
