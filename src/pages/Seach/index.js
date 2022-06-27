import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import api from "../../services/api";

import PostItem from "../../components/PostItem";
import styles from "./styles";

export default function Seach() {
  const [input, setInput] = useState("");
  const [post, setPost] = useState([]);
  const [empty, setEmpty] = useState(false);

  async function handleSearchPost() {
    if (input === "") {
      alert("Digite algum nome!");
      return;
    }

    const response = await api.get(
      `posts?filters[title][$containsi]=${input}&populate=cover`
    );

    if (response.data?.data.length === 0) {
      setEmpty(true);
      setPost([]);
      return;
    }

    setPost(response.data?.data);
    setEmpty(false);
    setInput("");
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          value={input}
          onChangeText={(text) => setInput(text)}
          style={styles.input}
          placeholder="O que etá buscando?"
        />

        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleSearchPost}
        >
          <Feather name="search" size={25} color="#000" />
        </TouchableOpacity>
      </View>

      {empty && (
        <View>
          <Text style={styles.emptyText}>
            Ops não encotramos nenhum post...
          </Text>
        </View>
      )}

      <FlatList
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        data={post}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <PostItem data={item} />}
      />
    </View>
  );
}
