import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainButtons: {
    height: "28%",
    width: "34%",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: "7%",
  },
  mainButtonsContent: {
    alignItems: "center",
    justifyContent: "flex-end",
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
});
