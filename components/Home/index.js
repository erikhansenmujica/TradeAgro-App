import React from "react";
import { View, Image, ImageBackground, TouchableOpacity } from "react-native";
import generalStyles from "../../generalStyles";
import mainButtonsInfo from "../../mainButtonsInfo";
import homeStyles from "./homeStyles";
import { Text } from "../Elements";
import background from "../../assets/fondoMovil.png";
import { useSelector } from "react-redux";

const styles = { ...generalStyles, ...homeStyles };

export default function ({ navigation }) {
  const notifications = useSelector((state) => state.notifications.number);
  function showAlert(button) {
    if (button.name === "CheckMarket" && notifications) return true;
    return false;
  }
  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <View style={{ ...styles.container }}>
        {mainButtonsInfo.map((button, index) => (
          <TouchableOpacity
            style={
              button.title2 !== "Mercado"
                ? { ...styles.mainButtons, backgroundColor: "#B0B0B0" }
                : styles.mainButtons
            }
            onPress={() =>
              button.title2 === "Mercado" && navigation.navigate(button.name)
            }
            key={index}
            activeOpacity={0.7}
          >
            <View>
              {showAlert(button) && (
                <View style={styles.notificationAlertView}>
                  <Text
                    content={Number(notifications) > 99 ? "+99" : notifications}
                    style={styles.notificationAlertText}
                  />
                </View>
              )}

              <View style={styles.mainButtonsContent}>
                <Image source={button.image} style={styles.images} />

                <Text style={styles.mainButtonsTexts} content={button.title1} />
                <Text style={styles.mainButtonsTexts} content={button.title2} />
                {button.title2 !== "Mercado" && (
                  <Text style={styles.proximamente} content="Próximamente" />
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.inquiriesButton}
        onPress={() => navigation.navigate("Contacts")}
        activeOpacity={0.7}
      >
        <View style={styles.inquiriesButtonContent}>
          <Text style={styles.inquiriesButtonText} content="CONTACTOS" />
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}
