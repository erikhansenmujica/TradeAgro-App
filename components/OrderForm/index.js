import React, { useState } from "react";
import { View, TextInput, ImageBackground, Button } from "react-native";
import { Text } from "../Elements";
import generalStyles from "../../generalStyles";
import s from "./OrderFormStyles";
import background from "../../assets/fondoMovil.png";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-community/picker";

const styles = { ...s, ...generalStyles };

const types = {
  Input: ({ input }) => (
    <TextInput
      placeholder={input.defaultValue}
      style={{
        width: "90%",
        borderBottomWidth: 1,
        borderBottomColor: "#F4F4F4",
        fontSize:25,
        marginLeft:"3%"
      }}
    ></TextInput>
  ),
  Dropdown: ({ input }) => {
    console.log(input.defaultValue);
    return (
      <Picker
        style={{ height: 10, width: "80%" }}
        // onValueChange={(itemValue, itemIndex) =>
        //   setState({ language: itemValue })
        // }
        mode="dropdown"
        label={input.defaultValue}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    );
  },
  Calendar: () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState("date");
    const [show, setShow] = useState(false);

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

    const showTimepicker = () => {
      showMode("time");
    };
    const close = () => {
      setShow(false);
    };
    return (
      <View>
        <View>
          <Button onPress={showDatepicker} title="Seleccionar fecha" />
        </View>
        <View>
          <Button onPress={showTimepicker} title="Seleccionar horario" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <View>
          <Button onPress={close} title="Save date" />
        </View>
      </View>
    );
  },
};

export default function (props) {
  return (
    <ImageBackground source={background} style={styles.ImageBackground}>
      <View style={styles.container}>
        <View style={styles.OrderContainer}>
          <Text style={styles.Title} content={props.title} />
          {props.inputs &&
            props.inputs.map((input, i) => {
              const Input = types["Input"];

              return <Input input={input} key={i} />;
            })}
        </View>
      </View>
    </ImageBackground>
  );
}
