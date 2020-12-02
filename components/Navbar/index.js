import React from "react";
import {
  Button,
  Image,
  View,
  Platform,
  TouchableHighlight,
} from "react-native";
import { logo } from "../../assets/icons";
import generalStyles from "../../generalStyles";
import navbarStyles from "./navbarStyles";
import { Text } from "../Elements";
import { SimpleLineIcons } from "@expo/vector-icons";

const style = { ...generalStyles, ...navbarStyles };

export default function ({ title, options, navigation }) {
  console.log(navigation, "previousuasudasd");
  return (
    <View style={options.headerStyle}>
      <TouchableHighlight
        style={{ overflow: "hidden", maxWidth: 57 }}
        onPress={() => navigation.navigate("Home")}
      >
        <Image source={logo} style={style.HeaderLogo}></Image>
      </TouchableHighlight>
      <View>
        <Text
          content={title}
          style={
            {
              //   marginTop: 100,
              //   fontSize: 18,
              //   position: "absolute",
              //   top: -50,
              //   right: 150,
            }
          }
          type="black"
        ></Text>
      </View>
      <View
        style={
          {
            //   position: "absolute", right: 15, top: 50
          }
        }
      >
        <SimpleLineIcons name="options-vertical" size={24} color="black" />
      </View>
    </View>
  );
}
