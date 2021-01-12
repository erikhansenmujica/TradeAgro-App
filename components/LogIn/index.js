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
import { setToken } from "../../token";

const styles = { ...generalStyles, ...logInStyles };

export default function () {
  const [userLogIn, setUserLogIn] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const onChange = (e, name) => {
    setUserLogIn({ ...userLogIn, [name]: e });
  };
  const onSubmit = async () => {
    setErrorMessage("");
    const res = await Axios.post(`${URL}/users/login`, userLogIn).catch((err) =>
      setErrorMessage(err.message)
    );
    await setToken(res.data.auth_token);
    navigation.navigate("Home");
  };
  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <View style={styles.container}>
        <View style={styles.logInContainer}>
          <View style={styles.iconView}>
            <Image source={logo} style={styles.imageIcon} />
          </View>
          <View style={styles.userView}>
            <TextInput
              style={styles.textInputLogIn}
              name="email"
              placeholder="Usuario"
              onChangeText={(e) => onChange(e, "email")}
            />
          </View>
          <View style={styles.passwordView}>
            <TextInput
              style={styles.textInputLogIn}
              name="password"
              placeholder="Contraseña"
              secureTextEntry={true}
              onChangeText={(e) => onChange(e, "password")}
            />
          </View>
          <Text
            content={errorMessage}
            style={{ color: "red", marginTop: "5%", marginBottom: "-5%" }}
          />
          <TouchableHighlight
            style={styles.logInButton}
            onPress={() => onSubmit()}
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
