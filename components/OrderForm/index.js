import React, { useState } from "react";
import { View, ImageBackground } from "react-native";
import { Text } from "../Elements";
import generalStyles from "../../generalStyles";
import { s } from "./OrderFormStyles";
import background from "../../assets/fondoMovil.png";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import types from "./inputTypes";
import ListItem from "./ListItem";
const styles = { ...s, ...generalStyles };

export default function OrderForm(props) {
  const [request, setRequest] = useState({ date: new Date() });
  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <View style={styles.viewContainer}>
        <View
          style={{
            ...styles.OrderContainer,
            justifyContent: props.list ? "" : "space-between",
          }}
        >
          <Text style={styles.Title} content={props.title} />
          {props.list && (
            <View>
              {props.list.map((item, i) => (
                <ListItem user={item} />
              ))}
            </View>
          )}
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
        <View
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "5%",
          }}
        >
          <TouchableHighlight
            style={styles.backButton}
            onPress={() => props.navigation.goBack()}
          >
            <View style={styles.inquiriesButtonContent}>
              <Ionicons name="md-arrow-round-back" size={24} color="#0061AE" />
            </View>
          </TouchableHighlight>
          {props.sendButton && (
            <TouchableHighlight
              style={styles.inquiriesButton}
              // onPress={()=>}
            >
              <View style={styles.inquiriesButtonContent}>
                <Text style={styles.inquiriesButtonText} content="ENVIAR" />
              </View>
            </TouchableHighlight>
          )}
        </View>
      </View>
    </ImageBackground>
  );
}
