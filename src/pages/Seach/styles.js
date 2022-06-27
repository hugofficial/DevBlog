import { StyleSheet } from "react-native";
/*import Constants from "expo-constants";*/

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 18,
  },

  containerInput: {
    flexDirection: "row",
    width: "100%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 29,
  },

  input: {
    width: "85%",
    height: 45,
    backgroundColor: "#c4c4c4",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    padding: 8,
    fontSize: 16,
  },

  searchButton: {
    width: "15%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c4c4c4",
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    marginLeft: -1,
  },

  emptyText: {
    textAlign: "center",
  },
});
