import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Color from "../theme/color";

const Header = ({ children }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    heighy: 100,
    backgroundColor: Color.primary,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    color: "black",
    fontSize: 20,
  },
});

export default Header;
