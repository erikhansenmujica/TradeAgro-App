import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import generalStyles from "../../generalStyles";
import logInStyles from "./logInStyles";
import background from "../../assets/fondoMovil.png";
import { Text } from "../Elements";
import { logo } from "../../assets/icons/index";
import Axios from "axios";
import { URL } from "../../store/constants";
import { setToken, getToken } from "../../token";
import { useDispatch } from "react-redux";
import JWT from "expo-jwt";
import { addUser } from "../../store/actions/user";

const styles = { ...generalStyles, ...logInStyles };

export default function ({ navigation }) {
  const dispatch = useDispatch();
  const [userLogIn, setUserLogIn] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const onChange = (e, name) => {
    setUserLogIn({ ...userLogIn, [name]: e });
  };
  const onSubmit = async () => {
    setErrorMessage("");
    try {
      const res = await Axios.post(`${URL}/users/login`, userLogIn);
      if (res.data.auth_token) await setToken(res.data.auth_token);
      const user = JWT.decode(res.data.auth_token, "shhhhh").dataValues;
      dispatch(addUser(user));
      navigation.navigate(user.access_level ? "Home" : "PendingConfirmation");
    } catch (error) {
      setErrorMessage("Usuario incorrecto");
    }
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
          <TouchableOpacity
            style={styles.logInButton}
            onPress={() => onSubmit()}
            activeOpacity={0.7}
          >
            <Text content="INGRESAR" style={styles.textButtonStyle} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.recoverPasswordView}
            //   onPress={()=>}
            activeOpacity={.7}
          >
            <Text
              content="Olvide mi contraseña"
              style={styles.recoverPasswordText}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.createAccountView}
            onPress={() => navigation.navigate("register")}
            activeOpacity={0.7}
          >
            <Text
              content="Creá una cuenta tocando acá"
              style={styles.createAccountText}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
