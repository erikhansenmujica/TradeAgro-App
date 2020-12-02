import React from "react";
import { View, TouchableHighlight, Image, ImageBackground } from "react-native";
import generalStyles from "../../generalStyles";
import mainButtonsInfo from "../../mainButtonsInfo";
import homeStyles from "./homeStyles";
import { Text } from "../Elements";
import background from "../../assets/fondoMovil.png";

const styles = { ...generalStyles, ...homeStyles };

export default function ({ navigation }) {
  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <View style={{ ...styles.container }}>
        {mainButtonsInfo.map((button, index) => (
          <TouchableHighlight
            style={styles.mainButtons}
            onPress={() => navigation.navigate(button.name)}
            key={index}
          >
            <View style={styles.mainButtonsContent}>
              <Image source={button.image} style={styles.images} />

              <Text style={styles.mainButtonsTexts} content={button.title1} />
              <Text style={styles.mainButtonsTexts} content={button.title2} />
            </View>
          </TouchableHighlight>
        ))}
      </View>
      <TouchableHighlight
        style={styles.inquiriesButton}
         onPress={()=>navigation.navigate("Contacts")}
      >
        <View style={styles.inquiriesButtonContent}>
          <Text style={styles.inquiriesButtonText} content="CONTACTS" />
        </View>
      </TouchableHighlight>
    </ImageBackground>
  );
}
