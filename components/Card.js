import React from "react";
import { View, StyleSheet } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: "80%",
    backgroundColor: "white",
    marginVertical: 15,
    padding: 15,
    shadowColor: "balck",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
    border: "1px solid grey",
    borderRadius: 5,
  },
});
export default Card;
