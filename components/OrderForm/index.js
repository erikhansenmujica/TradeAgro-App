import React from "react";
import { View, TextInput, ImageBackground } from "react-native";
import { Text } from "../Elements";
import generalStyles from "../../generalStyles";
import s from "./OrderFormStyles";
import background from "../../assets/fondoMovil.png";
const styles = { ...s, ...generalStyles };

export default function (props) {
  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <View style={styles.container}>
        <View style={styles.OrderContainer}>
          <Text style={styles.Title} content={props.title} />
          {props.inputs &&
            props.inputs.map((input, i) => (
              <TextInput placeholder={input.defaultValue} key={i}></TextInput>
            ))}
        </View>
      </View>
    </ImageBackground>
  );
}
