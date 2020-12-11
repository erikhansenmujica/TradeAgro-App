import React, { useState } from "react";
import {
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableHighlight,
  Linking,
  Dimensions,
  Modal,
  Image,
} from "react-native";
import generalStyles from "../../generalStyles";
import marketStyles from "./marketStyles";
import background from "../../assets/fondoMovil.png";
import { Text } from "../Elements";
import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";

const styles = { ...generalStyles, ...marketStyles };
const { width, height } = Dimensions.get("window");

const Icons = ({ user }) => (
  <View style={styles.iconsMarket}>
    <TouchableHighlight
      onPress={() => {
        Linking.openURL(`tel:${user.celular}`);
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
        Linking.openURL("http://api.whatsapp.com/send?phone=" + user.celular);
      }}
    >
      <Ionicons
        name="logo-whatsapp"
        size={((width * height) / 2) * 0.00017}
        color="#006A38"
      />
    </TouchableHighlight>
  </View>
);

function showData(data, expand) {
  if (!expand) return `${data.slice(0, 45)}...`;
  if (expand) return data;
}

function showModal(modalVisible, setModalVisible, data) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.centeredModalView}>
        <View style={styles.modalView}>
          <TouchableHighlight
            style={styles.topModal}
            onPress={() => setModalVisible(false)}
          >
            <Entypo
              name="cross"
              size={((width * height) / 2) * 0.00017}
              color="black"
            />
          </TouchableHighlight>
          <View style={styles.imageView}>
            <Image
              source={{
                uri: data.url_imagen,
              }}
              style={styles.imagesModal}
            />
          </View>
          <TouchableHighlight
            style={{
              marginLeft: "auto",
              marginRight: width * 0.05,
              marginTop: height * 0.02,
            }}
            onPress={() => setModalVisible(false)}
          >
            <Text content="CERRAR" style={styles.textsBlue}></Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
}

function miniMarkets(somethingHappened, setSomethingHappened, data) {
  return (
    <TouchableHighlight
      style={styles.touchableStyle}
      onPress={() => {
        setSomethingHappened(!somethingHappened);
        data.expand = !data.expand;
      }}
    >
      <View>
        <View style={styles.dataLeaderView}>
          <Text content={data.usuario} style={styles.textsBlue}></Text>
          <Icons user={data} />
        </View>
        <View style={styles.dataView}>
          <Text
            content={showData(data.mensaje, data.expand)}
            style={styles.dataText}
          ></Text>
        </View>
        <View style={styles.bottomBar}>
          {data.expand && data.url_imagen && (
            <TouchableHighlight
              style={styles.viewShowImage}
              onPress={() => setModalVisible(true)}
            >
              <Text content="VER IMAGEN" style={styles.textsBlue}></Text>
            </TouchableHighlight>
          )}
          <View style={styles.dateView}>
            <Text content={data.fecha}></Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default function ({ markets }) {
  const [somethingHappened, setSomethingHappened] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>
          <View style={styles.container}>
            {markets.map((data, index) => {
              return (
                <View key={`${index}-${data.expand}`}>
                  {showModal(modalVisible, setModalVisible, data)}
                  {miniMarkets(somethingHappened, setSomethingHappened, data)}
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
