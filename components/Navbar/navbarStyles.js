import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create(
  {
    columnNavbar: {},
    firstRowNavbar: {
      flexDirection: "row",
      marginTop: height * 0.047,
      marginBottom: height * 0.017,
      alignItems: "center",
      display: "flex",
    },
    firstROW: {
      width: width * 0.1,
      height: width * 0.1,
      marginLeft: width * 0.05,
    },
    titleStyle: { fontSize: 20 },
    logoNav: { resizeMode: "contain", width: "100%", height: "100%" },
    secondROW: {
      //   width: width * 0.6,
      marginLeft: width * 0.02,
    },
    thirdROW: {
      marginRight: width * 0.03,
      marginLeft: "auto",
    },
    secondRowNavbar: { marginLeft: width * 0.05 },
    textsExtendBar: {
      fontWeight: "bold",
      fontSize: 17,
      marginBottom: height * 0.0005,
    },
    logOutText: { color: "#0061AE", marginBottom: height * 0.008 },
  },
  console.log(width, height, "Dimensiones")
);

export default styles;
