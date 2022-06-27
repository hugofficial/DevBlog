import { StyleSheet } from "react-native";
/*import Constants from "expo-constants";*/

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  cover: {
    width: "100%",
    height: 230,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 14,
    marginTop: 18,
    paddingHorizontal: 12,
  },

  content: {
    paddingHorizontal: 12,
  },

  description: {
    lineHeight: 20,
  },

  sunTitle: {
    fontWeight: "bold",
    marginTop: 14,
    fontSize: 18,
    marginBottom: 6,
  },

  linkButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  linkText: {
    color: "#1e4687",
    fontSize: 16,
    marginLeft: 6,
  },
});
