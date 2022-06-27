import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { WebView } from "react-native-webview";

import { Feather } from "@expo/vector-icons";

import styles from "./styles";

export default function LinkWeb({ link, title, closeModal }) {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={closeModal}>
        <Feather name="x" size={25} color="#fff" />
        <Text style={styles.name}>{title}</Text>
      </TouchableOpacity>
      <WebView source={{ uri: link }} />
    </>
  );
}
