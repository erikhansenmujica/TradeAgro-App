import React, { useEffect, useState } from "react";
import { Image, View, Platform, TouchableHighlight } from "react-native";
import { lonelyLogo } from "../../assets/icons";
import generalStyles from "../../generalStyles";
import navbarStyles from "./navbarStyles";
import { Text } from "../Elements";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/actions/user";
import { removeToken } from "../../token";
const style = { ...generalStyles, ...navbarStyles };

function extendedNavBar(navigation, setExpand, user) {
  const dispatch = useDispatch();
  return (
    <View style={style.secondRowNavbar}>
      <View>
        <Text content={user ? user.email : ""} style={style.textsExtendBar} />
      </View>

      <View>
        <Text
          content={user ? user.company : "TradeAgro"}
          style={style.textsExtendBar}
        />
      </View>
      {user && (
        <TouchableHighlight
          onPress={async () => {
            await removeToken(null);
            dispatch(addUser(null));
            navigation.navigate("logIn");
            setExpand(false);
          }}
        >
          <Text content="CERRAR SESIÓN" style={style.logOutText} />
        </TouchableHighlight>
      )}
    </View>
  );
}

export default function ({ navigation }) {
  const [expand, setExpand] = useState(false);
  const user = useSelector((state) => state.user.data);
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
          <Text
            content={user ? user.name : "Bienvenido a TradeAgro"}
            style={style.titleStyle}
            type="black"
          ></Text>
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
      {expand && extendedNavBar(navigation, setExpand, user)}
    </View>
  );
}
