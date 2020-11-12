import React from "react";
import { Text } from "react-native";

export default ({ style, content }) => (
  <Text style={{ ...style, fontFamily: "RobotoMedium" }}>{content}</Text>
);
