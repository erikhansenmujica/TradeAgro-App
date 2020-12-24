import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const generalButtonStyles = StyleSheet.create({
  buttonsView: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    // marginTop: "5%",
  },
  inquiriesButton: {
    backgroundColor: "green",
    height: 60,
    borderRadius: 7,
    marginTop: "15%",
    width: 100,
    borderColor: "white",
    borderWidth: 1,
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
    height: 70,
    borderRadius: 100,
    marginTop: "15%",
    width: 70,
  },
});

export default generalButtonStyles;
