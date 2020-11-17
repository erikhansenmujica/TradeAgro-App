import React, {useState} from "react";
import { View, TextInput, ImageBackground } from "react-native";
import { Text } from "../Elements";
import generalStyles from "../../generalStyles";
import s from "./OrderFormStyles";
import background from "../../assets/fondoMovil.png";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-community/picker";

const styles = { ...s, ...generalStyles };

const types = {
  Input: (input) => (
    <TextInput placeholder={input.defaultValue} ></TextInput>
  ),
  Dropdown: (input) => (
    <Picker
      selectedValue={input.defaultValue}
      style={{ height: 10, width: 100 }}
      // onValueChange={(itemValue, itemIndex) =>
      //   setState({ language: itemValue })
      // }
    >
      <Picker.Item label="10" value="10" />
      <Picker.Item label="20" value="20" />
    </Picker>
  ),
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

    return (
      <View>
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
            props.inputs.map(
              (input, i) => {
                console.log(input);
                const Input = types[input.type];
                console.log(Input);
                return <Input input={input} key={i} />;
              }
              // <TextInput placeholder={input.defaultValue} key={i}></TextInput>
            )}
        </View>
      </View>
    </ImageBackground>
  );
}
