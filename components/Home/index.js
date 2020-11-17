import React from "react";
import { View, TouchableHighlight, Image, ImageBackground } from "react-native";
import generalStyles from "../../generalStyles";
import mainButtonsInfo from "../../mainButtonsInfo";
import homeStyles from "./homeStyles";
import { Text } from "../Elements";
import background from "../../assets/fondoMovil.png";

const styles = { ...generalStyles, ...homeStyles };

export default function ({ navigation }) {
  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <View style={{ ...styles.container }}>
        {mainButtonsInfo.map((button) => (
          <TouchableHighlight
            style={styles.touchable}
            onPress={() => navigation.navigate(button.name)}
            key={button.name}
          >
            <View style={styles.buttons}>
              <Image source={button.image} style={styles.images} />

              <Text content={button.title1} />
              <Text content={button.title2} />
            </View>
          </TouchableHighlight>
        ))}
      </View>
    </ImageBackground>
  );
}
