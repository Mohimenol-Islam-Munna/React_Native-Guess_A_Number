import React from "react";
import { View, Text } from "react-native";

const Title = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default Title;
