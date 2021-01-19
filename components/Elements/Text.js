import React from "react";
import { Text } from "react-native";

const fonts = {
  black: "roboto-black",
  medium: "roboto-regular",
};

export default ({ style, content, type }) => (
  <Text
    style={{
      ...style,
      fontFamily: type ? fonts[type] : "roboto-regular",
    }}
  >
    {content}
  </Text>
);
