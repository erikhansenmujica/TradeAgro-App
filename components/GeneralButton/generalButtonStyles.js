import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const generalButtonStyles = StyleSheet.create({
  buttonsView: {
    display: "flex",
    width: width,
    flexDirection: "row",
  },
  inquiriesButton: {
    backgroundColor: "green",
    height: height * 0.07,
    borderRadius: 7,
    width: width * 0.25,
  },
  inquiriesButtonContent: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  inquiriesButtonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  backButton: {
    backgroundColor: "white",
    height: height * 0.07,
    borderRadius: 100,
    width: height * 0.07,
  },
});

export default generalButtonStyles;
