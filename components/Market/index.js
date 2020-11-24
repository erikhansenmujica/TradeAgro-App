import React from "react";
import {
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import generalStyles from "../../generalStyles";
import marketStyles from "./marketStyles";
import background from "../../assets/fondoMovil.png";
import { Text } from "../Elements";
import marketInfo from "./marketInfo";

const styles = { ...generalStyles, ...marketStyles };

export default function ({ navigation }) {
  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>
          <View style={styles.container}>
            {marketInfo.map((data, index) => {
              return (
                <TouchableHighlight
                  style={styles.touchableStyle}
                  // onPress={()=>navigation.navigate("Home")}
                  key={index}
                >
                  {/* supongo que le tendre que poner un view a cada uno para acomodarlos */}
                  <View> 
                    <Text
                      content={data.dataLeader}
                      style={styles.dataLeader}
                    ></Text>
                    <Text content={data.data} style={styles.data}></Text>
                    <Text content={data.price}></Text>
                    <Text content={data.date}></Text>
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
