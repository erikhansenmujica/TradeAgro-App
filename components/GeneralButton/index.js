import React from "react";
import { View, TouchableHighlight, Dimensions } from "react-native";
import { Text } from "../Elements";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import generalStyles from "../../generalStyles";
import generalButtonStyles from "./generalButtonStyles";
const styles = { ...generalStyles, ...generalButtonStyles };
const { width, height } = Dimensions.get("window");

export default function (props) {
  return (
    <View
      style={
        props.center
          ? { ...styles.buttonsView, justifyContent: "space-around" }
          : { ...styles.buttonsView, marginLeft: width * 0.15 }
      }
    >
      <TouchableHighlight
        style={styles.backButton}
        onPress={() => props.navigation.goBack()}
      >
        <View style={styles.inquiriesButtonContent}>
          <AntDesign name="arrowleft" size={24} color="#0061AE" />
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
  );
}
