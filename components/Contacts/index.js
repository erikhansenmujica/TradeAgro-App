import React from "react";
import {
  View,
  ImageBackground,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { Text } from "../Elements";
import background from "../../assets/fondoMovil.png";
import generalStyles from "../../generalStyles";
import contactStyles from "./contactStyles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const styles = { ...generalStyles, ...contactStyles };
const { width, height } = Dimensions.get("window");

function itemList(user, index) {
  return (
    <View style={styles.eachContactRow} index={index}>
      <Text
        content={user.name}
        style={{
          color: "#006A38",
          fontSize: ((width * height) / 2) * 0.00013,
        }}
      />
      <View style={styles.iconsRow}>
        <TouchableHighlight
          onPress={() => {
            Linking.openURL(`tel:${user.phone}`);
          }}
        >
          <MaterialIcons
            name="phone-forwarded"
            size={((width * height) / 2) * 0.00017}
            color="#006A38"
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            Linking.openURL("http://api.whatsapp.com/send?phone=" + user.phone);
          }}
        >
          <Ionicons
            name="logo-whatsapp"
            size={((width * height) / 2) * 0.00017}
            color="#006A38"
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default function () {
  const users = [
    { name: "Juan Caraffo", phone: "+5492262561476" },
    { name: "Claudio Rivero", phone: "+5492262484006" },
    { name: "Martin Davico", phone: "+5492262618133" },
    { name: "Alejandro Ibañez", phone: "+5492262578703" },
    { name: "Pablo Pizzi", phone: "+5492262574637" },
    { name: "Carlos Premrou", phone: "+5492262562234" },
    { name: "Alberto Caraffo", phone: "+5492262567626" },
  ];
  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <View style={styles.container}>
        <View style={styles.whiteContainer}>
          {users && users.map((user, index) => itemList(user, index))}
        </View>
      </View>
    </ImageBackground>
  );
}
