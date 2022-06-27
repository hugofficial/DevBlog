import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";

import CategoryItem from "../../components/categoryItem";
import FavoritePost from "../../components/FavoritePost";
import PostItem from "../../components/PostItem";
import { getFavorite, setFavorite } from "../../services/favorite";

import styles from "./styles";
import * as Animatable from "react-native-animatable";

const FlatListAnimated = Animatable.createAnimatableComponent(FlatList);

export default function Home() {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const [favCategory, setFavCategory] = useState([]);

  const [posts, setPosts] = useState([]);
  const [loading, setLoadin] = useState(false);

  useEffect(() => {
    async function loadData() {
      await getListPost();

      const category = await api.get("/categories?populate=icon");

      setCategories(category.data.data);
    }
    loadData();
  }, []);

  useEffect(() => {
    async function favorite() {
      const response = await getFavorite();
      setFavCategory(response);
    }
    favorite();
  }, []);

  //Favoritando uma categoria
  async function handleFavorite(id) {
    const response = await setFavorite(id);

    setFavCategory(response);
    /*alert("Categoria Favaritada!");*/
  }

  async function getListPost() {
    setLoadin(true);

    const response = await api.get("posts?populate=cover&sort=createdAt:desc");
    setPosts(response.data.data);

    setLoadin(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Animatable.Text style={styles.name} animation="fadeInLeft">
          DevBlog
        </Animatable.Text>

        <TouchableOpacity onPress={() => navigation.navigate("Seach")}>
          <Feather name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatListAnimated
        animation="flipInX"
        delay={500}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{ paddingRight: 12 }}
        style={styles.categories}
        data={categories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CategoryItem data={item} favorite={() => handleFavorite(item.id)} />
        )}
      />

      <View style={styles.main}>
        {favCategory.length !== 0 && (
          <FlatList
            style={styles.favorites}
            contentContainerStyle={{ paddingEnd: 18 }}
            data={favCategory}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <FavoritePost data={item} />}
          />
        )}

        <Text
          style={[
            styles.title,
            { marginTop: favCategory.length > 0 ? 14 : 45 },
          ]}
        >
          Conteúdos em alta
        </Text>

        <FlatList
          style={styles.post}
          showsVerticalScrollIndicator={false}
          data={posts}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <PostItem data={item} />}
          refreshing={loading}
          onRefresh={() => getListPost()}
        />
      </View>
    </SafeAreaView>
  );
}
