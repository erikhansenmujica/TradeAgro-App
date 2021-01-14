import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  ImageBackground: {
    width: width,
    height: height,
  },
  HeaderLogo: {
    width: 50,
    resizeMode: "contain",
    height: 50,
    marginLeft: "10%",
    marginTop: "25%",
  },
  whiteContainer: {
    height: height * 0.6,
    width: width * 0.75,
    borderStyle: "solid",
    borderColor: "#F4F4F4",
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
  },
});

export default styles;
