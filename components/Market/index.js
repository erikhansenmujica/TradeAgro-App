import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableHighlight,
  Linking,
} from "react-native";
import generalStyles from "../../generalStyles";
import marketStyles from "./marketStyles";
import background from "../../assets/fondoMovil.png";
import { Text } from "../Elements";
import marketInfo from "./marketInfo";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const styles = { ...generalStyles, ...marketStyles };

const Icons = ({ user }) => (
  <View
    style={{
      display: "flex",
      flexDirection: "row",
      width: "30%",
      justifyContent: "space-around",
    }}
  >
    <TouchableHighlight
      onPress={() => {
        Linking.openURL(`tel:${user.phone}`);
      }}
    >
      <MaterialIcons name="phone-forwarded" size={"25%"} color="#006A38" />
    </TouchableHighlight>
    <TouchableHighlight
      onPress={() => {
        Linking.openURL("http://api.whatsapp.com/send?phone=" + user.phone);
      }}
    >
      <Ionicons name="logo-whatsapp" size={"25%"} color="#006A38" />
    </TouchableHighlight>
  </View>
);

function showData(data, expend) {
  if (!expend) return `${data.slice(0, 45)}...`;
  if (expend) return data;
}

export default function () {
  const [somethingHappened, setSomethingHappened] = useState(false);

  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>
          <View style={styles.container}>
            {marketInfo.map((data, index) => {
              return (
                <TouchableHighlight
                  style={styles.touchableStyle}
                  onPress={() => {
                    setSomethingHappened(!somethingHappened);
                    data.expend = !data.expend;
                  }}
                  key={`${index}-${data.expend}`}
                >
                  <View>
                    <View style={styles.dataLeaderView}>
                      <Text
                        content={data.dataLeader}
                        style={styles.dataLeaderText}
                      ></Text>
                      <Icons user={data.user} />
                    </View>
                    <View style={styles.dataView}>
                      <Text
                        content={showData(data.data, data.expend)}
                        style={styles.dataText}
                      ></Text>
                    </View>
                    <View style={styles.dateView}>
                      <Text content={data.date}></Text>
                    </View>
                  </View>
                </TouchableHighlight>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
