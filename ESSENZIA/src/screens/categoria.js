import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Certifique-se de ter o pacote instalado

const categorias = [
  { id: '1', nome: 'Feminino', imagem: 'https://via.placeholder.com/150/FF69B4', tela: 'Feminino' },
  { id: '2', nome: 'Masculino', imagem: 'https://via.placeholder.com/150/1E90FF', tela: 'Masculino' },
  { id: '3', nome: 'Camisas', imagem: 'https://via.placeholder.com/150/32CD32', tela: 'Camisas' },
  { id: '4', nome: 'Calças', imagem: 'https://via.placeholder.com/150/8A2BE2', tela: 'Calças' },
  { id: '5', nome: 'Tênis', imagem: 'https://via.placeholder.com/150/FF4500', tela: 'Tenis' },
];

export default function Categoria() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate(item.tela)}
            activeOpacity={0.7}
          >
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <Text style={styles.text}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Fundo sólido
    padding: 10,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60, // Ajuste para mover o texto mais para baixo
    marginBottom: 20,
    color: '#333',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: '#555',
  },
});
