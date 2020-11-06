import React from "react"
import { Text, View, Button } from 'react-native';
import styles from "../../generalStyles"
import Buttons from "./buttons.js"
import mainButtonsInfo from "../../mainButtonsInfo"

export default function ({ navigation }) {
  return (
    <View style={styles.container}>
      {mainButtonsInfo.map(
        button =>
          <Buttons title={button.title} name={button.name} navigation={navigation}></Buttons>
      )}
    </View>
  );
}
