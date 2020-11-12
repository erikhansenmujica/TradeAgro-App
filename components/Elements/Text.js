import React from "react";
import { Text } from "react-native";

export default ({ style, content }) => (
  <Text style={{ ...style, fontFamily: "Roboto-Medium" }}>{content}</Text>
);
