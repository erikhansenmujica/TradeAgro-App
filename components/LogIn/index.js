import React from "react";
import {
  View,
  ImageBackground,
  Image,
  TouchableHighlight,
  TextInput,
} from "react-native";
import generalStyles from "../../generalStyles";
import logInStyles from "./logInStyles";
import background from "../../assets/fondoMovil.png";
import { Text } from "../Elements";
import { logo } from "../../assets/icons/index";

const styles = { ...generalStyles, ...logInStyles };

export default function () {
  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <View style={styles.container}>
        <View style={styles.logInContainer}>
          <View style={styles.iconView}>
            <Image source={logo} style={styles.imageIcon} />
          </View>
          <View style={styles.userView}>
            <TextInput style={styles.textInputLogIn} placeholder="Usuario" />
          </View>
          <View style={styles.passwordView}>
            <TextInput style={styles.textInputLogIn} placeholder="Contraseña" />
          </View>

          <TouchableHighlight
            style={styles.logInButton}
            //   onPress={()=>}
          >
            <Text content="INGRESAR" style={styles.textButtonStyle} />
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.recoverPasswordView}
            //   onPress={()=>}
          >
            <Text
              content="Olvide mi contraseña"
              style={styles.recoverPasswordText}
            />
          </TouchableHighlight>
        </View>
      </View>
    </ImageBackground>
  );
}
