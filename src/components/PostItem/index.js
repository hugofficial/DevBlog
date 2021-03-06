import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function PostItem({ data }) {
  const navigation = useNavigation();

  function handleDetails() {
    navigation.navigate("Detail", {id: data?.id});
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleDetails}>
      <View style={styles.header}>
        <Image
          style={styles.cover}
          source={{
            uri: `http://192.168.0.3:1337${data?.attributes?.cover?.data?.attributes?.url}`,
          }}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>
          {data?.attributes.title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {data?.attributes.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
