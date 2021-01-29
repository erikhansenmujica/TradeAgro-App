import React from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import { Text } from "../Elements";
import { Ionicons } from "@expo/vector-icons";
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
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => props.navigation.goBack()}
        activeOpacity={.7}
      >
        <View style={styles.inquiriesButtonContent}>
          <Ionicons name="md-arrow-round-back" size={24} color="#0061AE" />
        </View>
      </TouchableOpacity>
      {props.sendButton && (
        <TouchableOpacity
          style={styles.inquiriesButton}
          // onPress={()=>}
          activeOpacity={.7}
        >
          <View style={styles.inquiriesButtonContent}>
            <Text style={styles.inquiriesButtonText} content="ENVIAR" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
