import React, { useState } from "react";
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
import axios from "axios";
const styles = { ...generalStyles, ...logInStyles };

export default function () {
  const [user, setUser] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
    confPass: "",
  });
  const onChange = (e, name) => {
    console.log(user);
    setUser({ ...user, [name]: e });
  };
  const onRegister = async () => {
    const newUser = await axios.post(
      "http://localhost:3000/users/register",
      user
    );
    console.log(newUser.data);
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
              placeholder="Nombre completo"
              name="name"
              onChangeText={(e) => onChange(e, "name")}
            />
          </View>
          <View style={styles.userView}>
            <TextInput
              style={styles.textInputLogIn}
              placeholder="Email"
              name="email"
              onChangeText={(e) => onChange(e, "email")}
            />
          </View>
          <View style={styles.userView}>
            <TextInput
              style={styles.textInputLogIn}
              placeholder="Nombre de la empresa"
              name="company"
              onChangeText={(e) => onChange(e, "company")}
            />
          </View>
          <View style={styles.passwordView}>
            <TextInput
              style={styles.textInputLogIn}
              placeholder="Contraseña"
              name="password"
              onChangeText={(e) => onChange(e, "password")}
            />
          </View>
          <View style={styles.passwordView}>
            <TextInput
              style={styles.textInputLogIn}
              placeholder="Repetir contraseña"
              name="confPass"
              onChangeText={(e) => onChange(e, "confPass")}
            />
          </View>

          <TouchableHighlight style={styles.logInButton} onPress={onRegister}>
            <Text content="REGISTRARSE" style={styles.textButtonStyle} />
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
