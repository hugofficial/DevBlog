import { StyleSheet } from "react-native";
/*import Constants from "expo-constants";*/

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232630",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginTop: 18,
    marginBottom: 24,
  },

  name: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },

  categories: {
    maxHeight: 115,
    backgroundColor: "#efefef",
    marginHorizontal: 18,
    borderRadius: 8,
    zIndex: 9,
  },

  favorites: {
    marginTop: 50,
    maxHeight: 110,
    paddingStart: 18,
  },

  main: {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: -30,
  },

  title: {
    fontSize: 21,
    paddingHorizontal: 18,
    marginBottom: 14,
    fontWeight: "bold",
    color: "#162133",
  },

  post: {
    flex: 1,
    paddingHorizontal: 18,
  },
});
