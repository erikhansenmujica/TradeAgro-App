import React, { useEffect, useState } from "react";
import { Image, View, Platform, TouchableOpacity } from "react-native";
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
        <TouchableOpacity
          onPress={async () => {
            await removeToken(null);
            dispatch(addUser(null));
            navigation.navigate("logIn");
            setExpand(false);
          }}
          activeOpacity={0.7}
        >
          <Text content="CERRAR SESIÓN" style={style.logOutText} />
        </TouchableOpacity>
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
        <TouchableOpacity
          onPress={() =>
            user && user.access_level == 1 && navigation.navigate("Home")
          }
          style={style.firstROW}
          activeOpacity={0.7}
        >
          <Image source={lonelyLogo} style={style.logoNav}></Image>
        </TouchableOpacity>
        <View style={style.secondROW}>
          <Text
            content={user ? user.name : "Bienvenido a TradeAgro"}
            style={style.titleStyle}
            type="black"
          ></Text>
        </View>
        <TouchableOpacity
          onPress={() => setExpand(!expand)}
          style={style.thirdROW}
          activeOpacity={0.7}
        >
          {user &&
            (expand ? (
              <Entypo name="cross" size={24} color="black" />
            ) : (
              <SimpleLineIcons
                name="options-vertical"
                size={24}
                color="black"
              />
            ))}
        </TouchableOpacity>
      </View>
      {expand && extendedNavBar(navigation, setExpand, user)}
    </View>
  );
}
