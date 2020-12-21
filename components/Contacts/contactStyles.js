import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const contactStyles = StyleSheet.create({
  eachContactRow: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginLeft: "4%",
    marginTop: "5%",
    borderBottomColor: "#F4F4F4",
    borderBottomWidth: 3,
  },
  iconsRow: {
    display: "flex",
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-between",
  },
});

export default contactStyles;
