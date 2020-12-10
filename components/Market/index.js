import React, { useState } from "react";
import {
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableHighlight,
  Linking,
  Dimensions,
} from "react-native";
import generalStyles from "../../generalStyles";
import marketStyles from "./marketStyles";
import background from "../../assets/fondoMovil.png";
import { Text } from "../Elements";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const styles = { ...generalStyles, ...marketStyles };
const { width } = Dimensions.get("window");

const Icons = ({ user }) => (
  <View style={styles.iconsMarket}>
    <TouchableHighlight
      onPress={() => {
        Linking.openURL(`tel:${user.celular}`);
      }}
    >
      <MaterialIcons
        name="phone-forwarded"
        size={width * 0.065}
        color="#006A38"
      />
    </TouchableHighlight>
    <TouchableHighlight
      onPress={() => {
        Linking.openURL("http://api.whatsapp.com/send?phone=" + user.celular);
      }}
    >
      <Ionicons name="logo-whatsapp" size={width * 0.065} color="#006A38" />
    </TouchableHighlight>
  </View>
);

function showData(data, expand) {
  if (!expand) return `${data.slice(0, 45)}...`;
  if (expand) return data;
}

export default function ({ markets }) {
  const [somethingHappened, setSomethingHappened] = useState(false);

  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>
          <View style={styles.container}>
            {markets.map((data, index) => {
              return (
                <TouchableHighlight
                  style={styles.touchableStyle}
                  onPress={() => {
                    setSomethingHappened(!somethingHappened);
                    data.expand = !data.expand;
                  }}
                  key={`${index}-${data.expand}`}
                >
                  <View>
                    <View style={styles.dataLeaderView}>
                      <Text
                        content={data.usuario}
                        style={styles.dataLeaderText}
                      ></Text>
                      <Icons user={data} />
                    </View>
                    <View style={styles.dataView}>
                      <Text
                        content={showData(data.mensaje, data.expand)}
                        style={styles.dataText}
                      ></Text>
                    </View>
                    <View style={styles.dateView}>
                      <Text content={data.fecha}></Text>
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
