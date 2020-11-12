import React from "react";
import { Text, View, TouchableHighlight, Image } from "react-native";
import generalStyles from "../../generalStyles";
import mainButtonsInfo from "../../mainButtonsInfo";
import homeStyles from "./homeStyles";

const styles = { ...generalStyles, ...homeStyles };

export default function ({ navigation }) {
  return (
    <View style={styles.container}>
      {mainButtonsInfo.map((button) => (
        <TouchableHighlight
          style={styles.buttons}
          onPress={() => navigation.navigate(button.name)}
          key={button.name}
        >
          <View>
            <Image source={button.image} style={styles.images} />

            <Text style={styles.texts}>{button.title1}</Text>
            <Text style={styles.texts}>{button.title2}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  );
}
