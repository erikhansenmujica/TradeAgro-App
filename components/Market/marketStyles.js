import { StyleSheet } from "react-native";

export default StyleSheet.create({
  touchableStyle: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "80%",
    marginBottom: "5%",
  },
  safeAreaView: { marginBottom: "20%" },
  dataLeaderView: { marginTop: "3%", marginLeft: "6%", flexDirection:"row", justifyContent:"space-between" },
  dataLeaderText: { color: "#0061AE" },
  dataView: { marginLeft: "6%", marginRight: "3%", marginBottom:"2%", marginTop:"2%" },
  dataText: { fontWeight: "bold" },
  dateView: { alignItems: "flex-end", marginRight: "5%", marginBottom: "3%" },
});
