import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  touchableStyle: {
    backgroundColor: "white",
    borderRadius: 20,
    width: width * 0.8,
    marginBottom: "5%",
  },
  safeAreaView: { marginBottom: "20%" },
  dataLeaderView: {
    marginTop: "3%",
    marginLeft: "6%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textsBlue: { color: "#0061AE", fontWeight: "bold" },
  dataView: {
    marginLeft: "6%",
    marginRight: "3%",
    marginBottom: "2%",
    marginTop: "2%",
  },
  dataText: { fontWeight: "bold" },
  bottomBar: {
    alignItems: "flex-end",
    marginRight: "5%",
    marginBottom: "3%",
    flexDirection: "row",
    justifyContent: "center",
  },
  viewShowImage: { marginLeft: width * 0.3 },
  dateView: { marginLeft: "auto" },
  iconsMarket: {
    display: "flex",
    flexDirection: "row",
    width: width * 0.3,
    justifyContent: "space-around",
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: width * 0.7,
    height: height * 0.7,
    // padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  topModal: {
    marginTop: height * 0.005,
    marginRight: width * 0.02,
    marginLeft: "auto",
  },
  imageView: {
    width: width * 0.6,
    height: height * 0.6,
    // alignItems: "center",
    // justifyContent: "center",
  },
  imagesModal:{ width: "100%", height: "100%", resizeMode: "contain" }
});
