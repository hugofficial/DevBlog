import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function FavoritePost({ data }) {
  const navigetion = useNavigation();

  function handleNavigate() {
    navigetion.navigate("Detail", { id: data.id });
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <ImageBackground
        style={styles.cover}
        source={{
          uri: `http://192.168.0.3:1337${data?.attributes?.cover?.data?.attributes?.url}`,
        }}
        resizeMode="cover"
        blurRadius={3}
        imageStyle={{ borderRadius: 6, opacity: 0.5 }}
      >
        <Text style={styles.title} numberOfLines={1}>
          {data?.attributes?.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}
