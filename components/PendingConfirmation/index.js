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
import { useState } from "react/cjs/react.development";
import Axios from "axios";
import { URL } from "../../store/constants";
import { setToken, getToken } from "../../token";
import { useDispatch } from "react-redux";
import JWT from "expo-jwt";
import { addUser } from "../../store/actions/user";

const styles = { ...generalStyles, ...logInStyles };

export default function () {
  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <View style={styles.container}>
        <View style={styles.logInContainer}>
          <View style={styles.iconView}>
            <Image source={logo} style={styles.imageIcon} />
          </View>
          <Text content="pending confirmation" />
        </View>
      </View>
    </ImageBackground>
  );
}
