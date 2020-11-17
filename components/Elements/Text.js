import React from "react";
import { Text } from "react-native";

const fonts = {
  black: "RobotoBlack",
  medium: "RobotoMedium",
};

export default ({ style, content, type }) => (
  <Text
    style={{
      ...style,
      fontFamily: type ? fonts[type] : "RobotoMedium",
    }}
  >
    {content}
  </Text>
);
