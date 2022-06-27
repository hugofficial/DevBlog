import { StyleSheet, Dimensions } from "react-native";
const { width: WIDTH } = Dimensions.get("window");
/*import Constants from "expo-constants";*/

export default StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 18,
  },

  cover: {
    borderRadius: 5,
    width: WIDTH - 60,
    height: 110,
    justifyContent: "flex-end",
  },

  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    textShadowColor: "#121212",
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 8,
  },
});
