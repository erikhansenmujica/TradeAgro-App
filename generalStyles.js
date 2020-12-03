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
    width: 50,
    resizeMode: "contain",
    height: 50,
    marginLeft: "10%",
    marginTop: "25%"
  },
});

export default styles;
