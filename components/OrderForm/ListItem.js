import React from "react";
import { View, Linking } from "react-native";
import { Text } from "../Elements/index";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";
export default ({ user }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        marginLeft: "4%",
        marginTop: "5%",
        borderBottomColor: "#F4F4F4",
        borderBottomWidth: 3,
      }}
    >
      <Text content={user.name} style={{ color: "#006A38", fontSize: "20%" }} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "30%",
          justifyContent: "space-between",
        }}
      >
        <TouchableHighlight
          onPress={() => {
            Linking.openURL(`tel:${user.phone}`);
          }}
        >
          <MaterialIcons name="phone-forwarded" size={"35%"} color="#006A38" />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            Linking.openURL("http://api.whatsapp.com/send?phone=" + user.phone);
          }}
        >
          <Ionicons name="logo-whatsapp" size={"35%"} color="#006A38" />
        </TouchableHighlight>
      </View>
    </View>
  );
};
