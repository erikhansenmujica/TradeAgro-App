import React, { useRef, useState } from "react";
import { View, TextInput, ImageBackground, Button, Modal } from "react-native";
import { Text } from "../Elements";
import generalStyles from "../../generalStyles";
import { s, pickerSelectStyles } from "./OrderFormStyles";
import background from "../../assets/fondoMovil.png";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
const styles = { ...s, ...generalStyles };

const types = {
  Input: ({ input }) => (
    <TextInput
      placeholder={input.defaultValue}
      style={{
        width: "90%",
        borderBottomWidth: 1,
        borderBottomColor: "#F4F4F4",
        fontSize: 25,
        marginLeft: "3%",
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
  Calendar: () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState("date");
    const [show, setShow] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === "ios");
      setDate(currentDate);
    };

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };

    const showDatepicker = () => {
      showMode("date");
    };

    const close = () => {
      setShow(false);
    };
    return (
      <View>
        <View>
          <TouchableHighlight
            onPress={() => {
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
                content="DD/MM/AAAA"
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
              visible={true}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
              presentationStyle="overFullScreen"
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
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
            </Modal>
          </View>
        )}
      </View>
    );
  },
};

export default function OrderForm(props) {
  const myRef = useRef();

  const showRefPosition = () => {
    console.log("button clicked, set focus and log position", myRef);

    myRef.current.measure((width, height) => {
      console.log("Component width is: " + width);
      console.log("Component height is: " + height);
    });
  };
  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <View style={styles.container} ref={myRef}>
        <View style={styles.OrderContainer}>
          <Text style={styles.Title} content={props.title} />
          {props.inputs &&
            props.inputs.map((input, i) => {
              const Input = types[input.type];

              return <Input input={input} key={i} />;
            })}
        </View>
      </View>
    </ImageBackground>
  );
}
