import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  logInContainer: {
    backgroundColor: "white",
    width: width * 0.7,
    height: height * 0.44,
    borderRadius: 20,
    alignItems: "center",
  },
  iconView: { width: "80%", height: "15%", marginTop: "10%" },
  imageIcon: { height: "100%", width: "100%", resizeMode: "contain" },
  userView: { width: "78%", marginTop: "7%" },
  textInputLogIn: {
    borderBottomWidth: 1,
    borderBottomColor: "#F4F4F4",
    fontSize: 20,
  },
  passwordView: { width: "78%", marginTop: "7%" },
  logInButton: {
    backgroundColor: "#006A38",
    width: width * 0.54,
    height: height * 0.045,
    marginTop: height * 0.035,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonStyle: { fontWeight: "bold", color: "white" },
  recoverPasswordView: { marginTop: height * 0.03 },
  recoverPasswordText: { color: "#0061AE" },
});
