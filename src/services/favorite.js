import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "./api";

//Buscar categoria favoritada
export async function getFavorite() {
  const data = await AsyncStorage.getItem("@FavCategory");

  if (data !== null) {
    const response = await api.get(
      `/categories/${data}?fileds=name&populate=post,posts.cover`
    );
    return response.data?.data?.attributes?.posts?.data;
  } else {
    return [];
  }
}

//Favoritar uma categoria
export async function setFavorite(category) {
  await AsyncStorage.setItem("@FavCategory", String(category));

  const response = await getFavorite();

  return response;
}
