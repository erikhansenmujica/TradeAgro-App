import React, { useState } from "react";
import { View, ImageBackground } from "react-native";
import { Text } from "../Elements";
import generalStyles from "../../generalStyles";
import { s } from "./OrderFormStyles";
import background from "../../assets/fondoMovil.png";
import types from "./inputTypes";
import GeneralButton from "../GeneralButton";
const styles = { ...s, ...generalStyles };

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
        <GeneralButton
          sendButton={props.sendButton}
          navigation={props.navigation}
        />
      </View>
    </ImageBackground>
  );
}
