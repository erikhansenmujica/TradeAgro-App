import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import generalStyles from "../../generalStyles";
import rejectedUserStyles from "./rejectedUserStyles";
import background from "../../assets/fondoMovil.png";
import { Text } from "../Elements";
import { logo } from "../../assets/icons/index";
import axios from "axios";

const styles = { ...generalStyles, ...rejectedUserStyles };

export default function ({ navigation }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(null);
  const [message, setMessage] = useState("");
  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <View style={styles.container}>
        {loading ? (
          <View style={styles.logInContainer}>
            <ActivityIndicator style={styles.loader}/>
          </View>
        ) : (
          <View style={styles.logInContainer}>
            <View style={styles.iconView}>
              <Image source={logo} style={styles.imageIcon} />
            </View>
            <View style={styles.confirmationView}>
              <Text
                content="Decinos cual es el mail con el que te registraste y te enviaremos automáticamente tu contraseña al mismo!"
                style={styles.confirmationText}
              />
              <TextInput
                style={styles.input}
                onChangeText={(e) => setEmail(e)}
              />
              <Text content={message} style={styles.warningText}/>
            </View>
            <TouchableOpacity
              style={styles.tryLaterButton}
              onPress={async () => {
                setLoading(true);
                const res = await axios.post(
                  "http://api-1740558796.us-east-2.elb.amazonaws.com:3000/users/recoverpw",
                  { email: email }
                );
                console.log(res.data.user)
                if (res.data.user) {
                  alert("Contraseña enviada a tu email!")
                  navigation.navigate("logIn");
                }
                else{
                  setLoading(false)
                  setMessage("Ese email no está asociado a ningún usuario")
                }
              }}
              activeOpacity={0.7}
            >
              <Text content="Enviar!" style={styles.textButtonStyle} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}
