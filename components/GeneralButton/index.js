import React from "react";
import { View, TouchableHighlight } from "react-native";
import { Text } from "../Elements";
import { Ionicons } from "@expo/vector-icons";
import generalStyles from "../../generalStyles";
import generalButtonStyles from "./generalButtonStyles";
const styles = { ...generalStyles, ...generalButtonStyles };

export default function (props) {
  return (
    <View
      style={styles.buttonsView}
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
  );
}
