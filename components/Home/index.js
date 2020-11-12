import React from "react";
import { View, TouchableHighlight, ImageBackground } from "react-native";
import { Text } from "../Elements";
import styles from "../../generalStyles";
import mainButtonsInfo from "../../mainButtonsInfo";
import background from "../../assets/fondoMovil.png";
export default function ({ navigation }) {
  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <View style={{ ...styles.container, fontFamily: "Roboto-Medium" }}>
        {mainButtonsInfo.map((button) => (
          <TouchableHighlight
            style={styles.buttons}
            onPress={() => navigation.navigate(button.name)}
            key={button.name}
          >
            <Text content={button.title} />
          </TouchableHighlight>
        ))}
      </View>
    </ImageBackground>
  );
}
