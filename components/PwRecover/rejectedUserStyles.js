import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  logInContainer: {
    backgroundColor: "white",
    width: width * 0.7,
    height: height * 0.50,
    borderRadius: 20,
    alignItems: "center",
  },
  iconView: {
    width: width * 0.58,
    height: height * 0.08,
    marginTop: height * 0.02,
  },
  imageIcon: { height: "100%", width: "100%", resizeMode: "contain" },
  confirmationView: {
    marginTop: height * 0.04,
    marginLeft: width * 0.08,
    marginRight: width * 0.06,
  },
  confirmationText: { fontWeight: "bold", fontSize: 15, color: "#0061AE" },
  tryLaterButton: {
    backgroundColor: "#0061AE",
    width: width * 0.54,
    height: height * 0.045,
    marginTop: height * 0.03,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  input: { borderBottomWidth: 2, borderBottomColor: "#F4F4F4", fontSize: 20, marginTop: height * 0.03 },
  textButtonStyle: { fontWeight: "bold", color: "white" },
  warningText: { fontWeight: "bold", fontSize: 15, color: "red",marginTop: height * 0.03 },
  loader: {  marginTop: height * 0.2  },
});
