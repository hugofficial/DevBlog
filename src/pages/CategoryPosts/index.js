import React, { useLayoutEffect, useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import PostItem from "../../components/PostItem";
import api from "../../services/api";

import styles from "./styles";

export default function CategoryPosts() {
  const navigation = useNavigation();
  const route = useRoute();
  const [post, setPost] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title === "" ? "Categoria" : route.params?.title,
    });
  }, [navigation]);

  useEffect(() => {
    async function loadPost() {
      const response = await api.get(
        `/categories/${route.params?.id}?fields=name&populate=posts,posts.cover`
      );

      setPost(response.data?.data?.attributes?.posts?.data);
    }

    loadPost();
  }, []);

  function handleBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      {post.length === 0 && (
        <View style={styles.warningContainer}>
          <Text style={styles.warning}>
            Essa categoria ainda não possui nenhum post.
          </Text>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.textButton}>Encontrar posts</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        data={post}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <PostItem data={item} />}
      />
    </View>
  );
}
