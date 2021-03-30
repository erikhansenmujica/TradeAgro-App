import React from "react";
import { View, ImageBackground, Image, TouchableOpacity } from "react-native";
import generalStyles from "../../generalStyles";
import rejectedUserStyles from "./rejectedUserStyles";
import background from "../../assets/fondoMovil.png";
import { Text } from "../Elements";
import { logo } from "../../assets/icons/index";
import { addUser } from "../../store/actions/user";
import { removeToken } from "../../token";
import { useDispatch, useSelector } from "react-redux";

const styles = { ...generalStyles, ...rejectedUserStyles };

export default function ({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <View style={styles.container}>
        <View style={styles.logInContainer}>
          <View style={styles.iconView}>
            <Image source={logo} style={styles.imageIcon} />
          </View>
          <View style={styles.confirmationView}>
            <Text
              content="Lo sentimos! Tu petición ha sido rechazada."
              style={styles.confirmationText}
            />
             <Text
              content={`Razones: ${user.reject_reasons}`}
              style={styles.confirmationText}
            />
          </View>
          <TouchableOpacity
            style={styles.tryLaterButton}
            onPress={async () => {
              await removeToken(null);
              dispatch(addUser(null));
              navigation.navigate("logIn");
            }}
            activeOpacity={.7}
          >
            <Text content="Intentá más tarde!" style={styles.textButtonStyle} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
