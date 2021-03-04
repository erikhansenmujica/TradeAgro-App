import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from "react-native";
import generalStyles from "../../generalStyles";
import registerStyles from "./registerStyles";
import background from "../../assets/fondoMovil.png";
import { Text } from "../Elements";
import { logo } from "../../assets/icons/index";
import axios from "axios";
import { URL } from "../../store/constants";
import KeyboardListener from "react-native-keyboard-listener";

const { width, height } = Dimensions.get("window");
const styles = { ...generalStyles, ...registerStyles };

export default function ({ navigation }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
    confPass: "",
  });
  const [message, setMessage] = useState("");
  const [keyboard, setKeyboard] = useState(false);

  const [alert, setAlert] = useState({
    name: false,
    email: false,
    company: false,
    password: false,
    confPass: false,
  });
  const onChange = (e, name) => {
    setUser({ ...user, [name]: e });
  };

  const checker = () => {
    const obj = {
      ...alert,
    };
    for (const key in alert) {
      if (Object.hasOwnProperty.call(alert, key)) {
        if (!user[key]) obj[key] = true;
        else obj[key] = false;
      }
    }
    setAlert(obj);
    for (const key in obj) {
      if (Object.hasOwnProperty.call(alert, key)) {
        if (obj[key]) return true;
      }
    }
    return false;
  };

  const onRegister = async () => {
    if (checker()) {
      setMessage("Todos los campos son obligatorios");
    } else if (user.password !== user.confPass) {
      setAlert({
        password: true,
        confPass: true,
        name: false,
        email: false,
        company: false,
      });
      setMessage("Las contraseñas no coinciden");
    } else {
      setMessage("");
      const newUser = await axios
        .post(`${URL}/users/register`, user)
        .catch(() => {
          setMessage("El email ya está en uso");
          setAlert({
            password: false,
            confPass: false,
            name: false,
            email: true,
            company: false,
          });
        });
      if (newUser) navigation.navigate("logIn");
    }
  };

  const form = () => {
    return (
      <View>
        <View style={styles.userView}>
          <TextInput
            style={{
              ...styles.textInputLogIn,
              borderBottomColor: alert.name ? "red" : "#F4F4F4",
            }}
            placeholder="Nombre completo"
            name="name"
            onChangeText={(e) => onChange(e, "name")}
          />
        </View>
        <View style={styles.userView}>
          <TextInput
            style={{
              ...styles.textInputLogIn,
              borderBottomColor: alert.email ? "red" : "#F4F4F4",
            }}
            placeholder="Email"
            name="email"
            onChangeText={(e) => onChange(e, "email")}
          />
        </View>
        <View style={styles.userView}>
          <TextInput
            style={{
              ...styles.textInputLogIn,
              borderBottomColor: alert.company ? "red" : "#F4F4F4",
            }}
            placeholder="Nombre de la empresa"
            name="company"
            onChangeText={(e) => onChange(e, "company")}
          />
        </View>
        <View style={styles.passwordView}>
          <TextInput
            s
            style={{
              ...styles.textInputLogIn,
              borderBottomColor: alert.password ? "red" : "#F4F4F4",
            }}
            placeholder="Contraseña"
            name="password"
            secureTextEntry={true}
            onChangeText={(e) => onChange(e, "password")}
          />
        </View>
        <View style={{ ...styles.passwordView, marginBottom: "7%" }}>
          <TextInput
            style={{
              ...styles.textInputLogIn,
              borderBottomColor: alert.confPass ? "red" : "#F4F4F4",
            }}
            placeholder="Repetir contraseña"
            secureTextEntry={true}
            name="confPass"
            onChangeText={(e) => onChange(e, "confPass")}
          />
        </View>
      </View>
    );
  };

  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <KeyboardListener
        onWillShow={() => {
          setKeyboard(true);
        }}
        onWillHide={() => {
          setKeyboard(false);
        }}
      />
      <View style={{...styles.container,marginTop:keyboard?"-35%":"1%"}}>
        <SafeAreaView style={styles.whiteContainer}>
          <ScrollView >
            <View style={{ alignItems: "center", marginBottom: height * 0.45 }}>
              <View style={styles.iconView}>
                <Image source={logo} style={styles.imageIcon} />
              </View>
              {form()}
              <Text
                content={message}
                style={{ color: "red", marginTop: "5%", marginBottom: "-5%" }}
              />
              <TouchableOpacity
                style={styles.registerInButton}
                onPress={onRegister}
                activeOpacity={0.7}
              >
                <Text content="REGISTRARSE" style={styles.textButtonStyle} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.recoverPasswordView}
                onPress={() => navigation.navigate("logIn")}
                activeOpacity={0.7}
              >
                <Text
                  content="¿Ya estás registrado? Tocá acá e ingresa!"
                  style={styles.recoverPasswordText}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}
