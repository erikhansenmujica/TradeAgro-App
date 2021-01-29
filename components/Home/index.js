import React from "react";
import { View, Image, ImageBackground,TouchableOpacity } from "react-native";
import generalStyles from "../../generalStyles";
import mainButtonsInfo from "../../mainButtonsInfo";
import homeStyles from "./homeStyles";
import { Text } from "../Elements";
import background from "../../assets/fondoMovil.png";

const styles = { ...generalStyles, ...homeStyles };

export default function ({ navigation }) {
  function showAlert(button) {
    if (Number(button.notifications) <= 0) return false;
    return button.notifications && button.notifications !== "";
  }

  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <View style={{ ...styles.container }}>
        {mainButtonsInfo.map((button, index) => (
          <TouchableOpacity
            style={styles.mainButtons}
            onPress={() => navigation.navigate(button.name)}
            key={index}
            activeOpacity={.7}
          >
            <View>
              {showAlert(button) && (
                <View style={styles.notificationAlertView}>
                  <Text
                    content={
                      Number(button.notifications) > 99
                        ? "+99"
                        : button.notifications
                    }
                    style={styles.notificationAlertText}
                  />
                </View>
              )}

              <View style={styles.mainButtonsContent}>
                <Image source={button.image} style={styles.images} />

                <Text style={styles.mainButtonsTexts} content={button.title1} />
                <Text style={styles.mainButtonsTexts} content={button.title2} />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.inquiriesButton}
        onPress={() => navigation.navigate("Contacts")}
        activeOpacity={.7}
      >
        <View style={styles.inquiriesButtonContent}>
          <Text style={styles.inquiriesButtonText} content="CONTACTOS" />
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}
