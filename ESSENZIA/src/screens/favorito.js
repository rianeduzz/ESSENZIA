import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function Favorito() {
  // Estado para os itens favoritados
  const [favoritos, setFavoritos] = useState([
    {
      id: '1',
      nome: 'Running Shoes',
      imagem: require('../../assets/tenis.jpg'),
      preco: '$235',
      rating: 4.5,
      reviews: 1045,
    },
    {
      id: '2',
      nome: 'Running Shoes',
      imagem: require('../../assets/tenis.jpg'),
      preco: '$235',
      rating: 4.5,
      reviews: 1045,
    },
    {
      id: '3',
      nome: 'Running Shoes',
      imagem: require('../../assets/tenis.jpg'),
      preco: '$235',
      rating: 4.5,
      reviews: 1045,
    },
  ]);
  // Estado para controle do modal de confirmação
  const [itemParaRemover, setItemParaRemover] = useState(null);

  // Função para remover item dos favoritos
  const removerFavorito = (id) => {
    setFavoritos(favoritos.filter(item => item.id !== id));
    setItemParaRemover(null);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemCard}>
      <Image source={item.imagem} style={styles.productImage} />
      <View style={styles.itemInfo}>
        {/* <Image source={item.marca} style={styles.brandIcon} /> */}
        <Text style={styles.productName}>{item.nome}</Text>
        <View style={styles.ratingRow}>
          <FontAwesome name="star" size={14} color="#FFD700" />
          <Text style={styles.ratingText}>
            {item.rating} <Text style={styles.reviewText}>({item.reviews} Reviews)</Text>
          </Text>
        </View>
        <Text style={styles.price}>{item.preco}</Text>
      </View>
      <TouchableOpacity onPress={() => setItemParaRemover(item)}>
        <Ionicons name="heart" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>
      <View style={styles.searchBox}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar"
            placeholderTextColor="gray"
          />
        </View>
      </View>
      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* Modal de confirmação */}
      <Modal
        visible={!!itemParaRemover}
        transparent
        animationType="fade"
        onRequestClose={() => setItemParaRemover(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Tem certeza que deseja remover este item dos favoritos?</Text>
            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setItemParaRemover(null)}
              >
                <Text style={styles.cancelText}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.modalButton, styles.confirmButton]}
                onPress={() => removerFavorito(itemParaRemover?.id)}
              >
                <Text style={styles.confirmText}>Remover</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  searchBox: {
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
    height: 40, // Aumenta a altura para evitar corte
    paddingVertical: 0, // Remove padding vertical para centralizar o texto
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 64,
    height: 64,
    borderRadius: 12,
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
  },
  brandIcon: {
    width: 20,
    height: 20,
    marginBottom: 4,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#000',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 4,
    color: '#000',
  },
  reviewText: {
    color: '#888',
    fontSize: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    backgroundColor: '#000',
    borderRadius: 30,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#eee',
  },
  confirmButton: {
    backgroundColor: '#d32f2f',
  },
  cancelText: {
    color: '#333',
    fontWeight: 'bold',
  },
  confirmText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
