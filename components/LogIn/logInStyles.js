import { StyleSheet } from "react-native";

export default StyleSheet.create({
  logInContainer: {
    backgroundColor: "white",
    width: "75%",
    height: "50%",
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
    width: "76%",
    height: "9%",
    marginTop: "13%",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonStyle: { fontWeight: "bold", color: "white" },
  recoverPasswordView: { marginTop: "8%" },
  recoverPasswordText: { color: "#0061AE" },
});
