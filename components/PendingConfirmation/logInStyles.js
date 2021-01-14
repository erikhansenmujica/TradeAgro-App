import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  logInContainer: {
    backgroundColor: "white",
    width: width * 0.7,
    height: height * 0.4,
    borderRadius: 20,
    alignItems: "center",
  },
  iconView: { width: "80%", height: "15%", marginTop: "10%" },
  imageIcon: { height: "100%", width: "100%", resizeMode: "contain" },
  userView: { width: "78%", marginTop: "7%" },

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
});