import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Favorito() {
  const navigation = useNavigation();

  const favoritos = [
    { id: '1', nome: 'Item Favorito ', descricao: 'Descrição do item favorito ', foto: 'https://via.placeholder.com/50' },
    { id: '2', nome: 'Item Favorito ', descricao: 'Descrição do item favorito', foto: 'https://via.placeholder.com/50' },
    { id: '3', nome: 'Item Favorito ', descricao: 'Descrição do item favorito ', foto: 'https://via.placeholder.com/50' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemContent}>
        <Image source={{ uri: item.foto }} style={styles.itemImage} />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemText}>{item.nome}</Text>
          <Text style={styles.itemDescription}>{item.descricao}</Text>
        </View>
        <Ionicons name="heart" size={24} color="black" style={styles.heartIcon} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Meus Favoritos</Text>
      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 25, // Adicionado marginTop
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  itemContainer: {
    padding: 15,
    marginBottom: 10,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Adicionado para espaçar os elementos
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  heartIcon: {
    marginLeft: 50, // Ajustado para posicionar mais à direita
  },
});
