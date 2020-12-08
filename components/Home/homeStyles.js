import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  mainButtons: {
    height: height * 0.25,
    width: width * 0.34,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: "7%",
  },
  mainButtonsContent: {
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: height * 0.02,
  },
  images: {
    width: "60%",
    height: "60%",
    resizeMode: "contain",
  },
  mainButtonsTexts: {
    fontWeight: "bold",
    color: "#006A38",
  },
  inquiriesButton: {
    backgroundColor: "green",
    position: "absolute",
    alignSelf: "center",
    top: "70%",
    width: "42%",
    height: 30,
    borderRadius: 7,
  },
  inquiriesButtonContent: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  inquiriesButtonText: {
    fontWeight: "bold",
    color: "white",
  },
  notificationAlertView: {
    position: "absolute",
    backgroundColor: "#006A38",
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.075,
    height: width * 0.075,
    borderRadius: 20,
    top: width * -0.035,
    left: width * -0.035,
  },
  notificationAlertText: {
    color: "white",
  },
});
