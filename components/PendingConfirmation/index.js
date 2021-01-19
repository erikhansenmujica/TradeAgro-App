import React from "react";
import {
  View,
  ImageBackground,
  Image,
  TouchableHighlight,
  TextInput,
} from "react-native";
import generalStyles from "../../generalStyles";
import pendingConfirmationStyles from "./PendingConfirmationStyles";
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

const styles = { ...generalStyles, ...pendingConfirmationStyles };

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
      await setToken(res.data.auth_token);
      dispatch(addUser(JWT.decode(res.data.auth_token, "shhhhh").dataValues));
      navigation.navigate("Home");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <View style={styles.container}>
        <View style={styles.logInContainer}>
          <View style={styles.iconView}>
            <Image source={logo} style={styles.imageIcon} />
          </View>
          <View style={styles.confirmationView}>
            <Text
              content="Esperando confirmación, una vez confirmado te llegará un mail y podrás tener acceso a nuestros servicios  "
              style={styles.confirmationText}
            />
          </View>
          <TouchableHighlight
            style={styles.tryLaterButton}
            // onPress={() => taria bueno que haga algo esto}
          >
            <Text content="Intenta mas tarde!" style={styles.textButtonStyle} />
          </TouchableHighlight>
        </View>
      </View>
    </ImageBackground>
  );
}
