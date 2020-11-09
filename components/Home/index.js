import React from "react";
import { Text, View, TouchableHighlight } from "react-native";
import styles from "../../generalStyles";
import mainButtonsInfo from "../../mainButtonsInfo";

export default function ({ navigation }) {
  return (
    <View style={styles.container}>
      {mainButtonsInfo.map((button) => (
        <TouchableHighlight
          style={styles.buttons}
          onPress={() => navigation.navigate(button.name)}
          key={button.name}
        >
          <Text>{button.title}</Text>
        </TouchableHighlight>
      ))}
    </View>
  );
}
