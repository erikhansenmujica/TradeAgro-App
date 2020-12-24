import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  Title: {
    fontSize: 35,
    textAlign: "center",
    color: "#0061AE",
    marginTop: 10,
  },
  viewContainer: {
    paddingTop: 60,
    flexDirection: "column",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
});
export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "#F4F4F4",
    fontSize: 25,
    marginLeft: "3%",
  },
  inputAndroid: {
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "#F4F4F4",
    fontSize: 22,
    marginLeft: "3%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: "20%",
  },
});
