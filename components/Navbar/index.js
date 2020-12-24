import React, { useState } from "react";
import { Image, View, Platform, TouchableHighlight } from "react-native";
import { lonelyLogo } from "../../assets/icons";
import generalStyles from "../../generalStyles";
import navbarStyles from "./navbarStyles";
import { Text } from "../Elements";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const style = { ...generalStyles, ...navbarStyles };

function extendedNavBar(navigation, setExpand) {
  return (
    <View style={style.secondRowNavbar}>
      <View>
        <Text content="20-25.530.256-1" style={style.textsExtendBar} />
      </View>

      <View>
        <Text content="TradeAgro" style={style.textsExtendBar} />
      </View>

      <TouchableHighlight
        onPress={() => {
          navigation.navigate("logIn");
          setExpand(false);
        }}
      >
        <Text content="CERRAR SESIÓN" style={style.logOutText} />
      </TouchableHighlight>
    </View>
  );
}

export default function ({ title, navigation }) {
  const [expand, setExpand] = useState(false);
  return (
    <View style={style.columnNavbar}>
      <View style={style.firstRowNavbar}>
        <TouchableHighlight
          onPress={() => navigation.navigate("Home")}
          style={style.firstROW}
        >
          <Image source={lonelyLogo} style={style.logoNav}></Image>
        </TouchableHighlight>
        <View style={style.secondROW}>
          <Text content={title} style={style.titleStyle} type="black"></Text>
        </View>
        <TouchableHighlight
          onPress={() => setExpand(!expand)}
          style={style.thirdROW}
        >
          {expand ? (
            <Entypo name="cross" size={24} color="black" />
          ) : (
            <SimpleLineIcons name="options-vertical" size={24} color="black" />
          )}
        </TouchableHighlight>
      </View>
      {expand && extendedNavBar(navigation, setExpand)}
    </View>
  );
}
