import React from "react";
import { Text } from "react-native";

const fonts = {
  black: "RobotoBlack",
  medium: "RobotoRegular",
};

export default ({ style, content, type }) => (
  <Text
    style={{
      ...style,
      fontFamily: type ? fonts[type] : "RobotoRegular",
    }}
  >
    {content}
  </Text>
);
