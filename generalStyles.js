import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    height: "100%",
    width: "100%",
  },
  ImageBackground: {
    width: "100%",
    height: "100%",
  },
  HeaderLogo: {
    width: 170,
    resizeMode: "contain",
    height: 120,
    marginLeft: 20,
  },
});

export default styles;
