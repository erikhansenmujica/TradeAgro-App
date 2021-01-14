import React, { useState } from "react";
import { View, ImageBackground, Dimensions } from "react-native";
import { Text } from "../Elements";
import generalStyles from "../../generalStyles";
import { s } from "./OrderFormStyles";
import background from "../../assets/fondoMovil.png";
import types from "./inputTypes";
import GeneralButton from "../GeneralButton";
const styles = { ...s, ...generalStyles };
const { height } = Dimensions.get("window");

export default function OrderForm(props) {
  const [request, setRequest] = useState({ date: new Date() });
  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <View style={styles.viewContainer}>
        <View
          style={{
            ...styles.whiteContainer,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.Title} content={props.title} />
          {props.inputs &&
            props.inputs.map((input, i) => {
              const Input = types[input.type];

              return (
                <Input
                  input={input}
                  key={i}
                  setRequest={setRequest}
                  request={request}
                />
              );
            })}
        </View>
        <View style={{ marginTop: height * 0.015 }}>
          <GeneralButton
            sendButton={props.sendButton}
            navigation={props.navigation}
            center
          />
        </View>
      </View>
    </ImageBackground>
  );
}
