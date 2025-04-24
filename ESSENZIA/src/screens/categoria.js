import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const categorias = [
  { id: '1', nome: 'Feminino', imagem: 'https://via.placeholder.com/150/FF69B4', tela: 'Feminino' },
  { id: '2', nome: 'Masculino', imagem: 'https://via.placeholder.com/150/1E90FF', tela: 'Masculino' },
  { id: '3', nome: 'Camisas', imagem: 'https://via.placeholder.com/150/32CD32', tela: 'Camisas' },
  { id: '4', nome: 'Calças', imagem: 'https://via.placeholder.com/150/8A2BE2', tela: 'Calças' },
  { id: '5', nome: 'Tênis', imagem: 'https://via.placeholder.com/150/FF4500', tela: 'Tênis' },
];

export default function Categoria() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate(item.tela)}
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
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  text: {
    fontSize: 18,
  },
});
