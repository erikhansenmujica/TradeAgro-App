import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  OrderContainer: {
    height: "55%",
    width: "75%",
    borderStyle: "solid",
    borderColor: "#F4F4F4",
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
  },
  Title: {
    fontSize: 35,
    textAlign: "center",
    color: "#0061AE",
    marginTop: 10,
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
    backgroundColor: "white",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
