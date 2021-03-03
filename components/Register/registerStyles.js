import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  logInContainer: {
    backgroundColor: "white",
    width: width * 0.7,
    borderRadius: 20,
    // alignItems: "center",
  },
  iconView: { width: "80%", height: "15%", marginTop: "8%" },
  imageIcon: { height: "100%", width: "100%", resizeMode: "contain" },
  userView: { width: "78%", marginTop: "7%" },
  textInputLogIn: {
    borderBottomWidth: 1,
    fontSize: 20,
  },
  passwordView: { width: "78%", marginTop: "7%" },
  registerInButton: {
    backgroundColor: "#006A38",
    width: width * 0.63,
    height: height * 0.055,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonStyle: { fontWeight: "bold", color: "white" },
  recoverPasswordView: { marginTop: "8%", marginBottom: "5%" },
  recoverPasswordText: { color: "#0061AE" },
  alertText: { color: "red" },
});
