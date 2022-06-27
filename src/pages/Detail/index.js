import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Share,
  Modal,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather, Entypo } from "@expo/vector-icons";

import api from "../../services/api";
import LinkWeb from "../../components/LinkWeb";

import styles from "./styles";

export default function Detail() {
  const route = useRoute();
  const navigetion = useNavigation();

  const [post, setPost] = useState({});
  const [links, setLinks] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [openLink, setOpenLink] = useState({});

  useEffect(() => {
    async function getPost() {
      const response = await api.get(
        `/posts/${route.params?.id}?populate=cover,category,Opcoes`
      );
      setPost(response.data.data);
      setLinks(response.data?.data?.attributes?.Opcoes);
    }

    getPost();
  }, []);

  useLayoutEffect(() => {
    navigetion.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleShare}>
          <Entypo name="share" size={25} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigetion, post]);

  async function handleShare() {
    try {
      const result = await Share.share({
        message: `
        Confere esse post: ${post?.attributes?.title} 

        ${post?.attributes?.description} 

        Vi lá no app Devpost!
        `,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("ATIVIY TYPE");
        } else {
          console.log("COMPARTILHADO COM SUCESSO");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("MODAL FECHADO");
      }
    } catch (error) {
      console.log("ERROR");
    }
  }

  function handleOpenLink(link) {
    setModalVisible(true);
    setOpenLink(link);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.cover}
        resizeMode="cover"
        source={{
          uri: `http://192.168.0.3:1337${post?.attributes?.cover?.data?.attributes?.url}`,
        }}
      />

      <Text style={styles.title}>{post?.attributes?.title}</Text>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>{post?.attributes?.description}</Text>

        {links.length > 0 && <Text style={styles.sunTitle}>Links</Text>}

        {links.map((link) => (
          <TouchableOpacity
            style={styles.linkButton}
            key={link.id}
            onPress={() => handleOpenLink(link)}
          >
            <Feather name="link" color="#1e4687" size={14} />
            <Text style={styles.linkText}>{link.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <LinkWeb
          link={openLink?.url}
          title={openLink?.name}
          closeModal={() => setModalVisible(false)}
        />
      </Modal>
    </SafeAreaView>
  );
}
