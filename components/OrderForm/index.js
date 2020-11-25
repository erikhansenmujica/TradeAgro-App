import React, { useState } from "react";
import { View, TextInput, ImageBackground, Button, Modal } from "react-native";
import { Text } from "../Elements";
import generalStyles from "../../generalStyles";
import { s, pickerSelectStyles } from "./OrderFormStyles";
import background from "../../assets/fondoMovil.png";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import moment from "moment";
import { Ionicons } from "@expo/vector-icons";
const styles = { ...s, ...generalStyles };

const types = {
  Input: ({ input }) => (
    <TextInput
      placeholder={input.defaultValue}
      multiline={true}
      style={{
        width: "90%",
        borderBottomWidth: 1,
        borderBottomColor: "#F4F4F4",
        fontSize: 25,
        marginLeft: "3%",
        height: "30%",
        marginBottom: "10%",
      }}
    ></TextInput>
  ),
  Dropdown: ({ input }) => {
    return (
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={input.options}
        placeholder={{ label: input.defaultValue }}
        style={pickerSelectStyles}
      />
    );
  },
  Calendar: ({ request, setRequest }) => {
    const [content, setContent] = useState("DD/MM/AAAA");
    const [mode, setMode] = useState("date");
    const [show, setShow] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || request.date;
      setShow(Platform.OS === "ios");
      setRequest({ ...request, date: currentDate });
      setContent(moment(currentDate).format("L"));
    };

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };

    const close = () => {
      setShow(false);
    };
    return (
      <View>
        <View>
          <TouchableHighlight
            onPress={() => {
              setShow(true);
              setModalVisible(!modalVisible);
            }}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text
                style={{
                  width: "80%",
                  borderBottomWidth: 1,
                  borderBottomColor: "#F4F4F4",
                  fontSize: 25,
                  marginLeft: "3%",
                  color: "#cccccc",
                }}
                content={content}
              ></Text>
              <Entypo name="calendar" size={24} color="#cccccc" />
            </View>
          </TouchableHighlight>
        </View>
        {show && (
          <View
            style={{
              position: "absolute",
              width: "100%",
              backgroundColor: "white",
            }}
          >
            <Modal
              animationType="slide"
              transparent={false}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
              presentationStyle="overFullScreen"
            >
              <ImageBackground
                source={background}
                style={styles.ImageBackground}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={request.date}
                      mode={mode}
                      is24Hour={true}
                      display="default"
                      onChange={onChange}
                      style={{ marginTop: "55%" }}
                    />
                  </View>
                </View>
                <Button
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    close();
                  }}
                  title="Save date"
                />
              </ImageBackground>
            </Modal>
          </View>
        )}
      </View>
    );
  },
};

export default function OrderForm(props) {
  const [request, setRequest] = useState({ date: new Date() });
  console.log(props);
  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <View style={styles.viewContainer}>
        <View style={styles.OrderContainer}>
          <Text style={styles.Title} content={props.title} />
          {props.inputs &&
            props.inputs.map((input, i) => {
              const Input = types[input.type];

              return (
                <Input
                  input={input}
                  key={i}
                  setRequest={setRequest}
                  request={request}
                />
              );
            })}
        </View>
        <View
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "5%",
          }}
        >
          <TouchableHighlight
            style={styles.backButton}
            onPress={() => props.navigation.goBack()}
          >
            <View style={styles.inquiriesButtonContent}>
              <Ionicons name="md-arrow-round-back" size={24} color="#0061AE" />
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.inquiriesButton}
            // onPress={()=>}
          >
            <View style={styles.inquiriesButtonContent}>
              <Text style={styles.inquiriesButtonText} content="ENVIAR" />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </ImageBackground>
  );
}
