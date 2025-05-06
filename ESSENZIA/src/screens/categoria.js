import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Certifique-se de ter o pacote instalado

const categorias = [
  { id: '1', nome: 'Camisas', imagem: require('../../assets/camisa.jpg'), tela: 'Camisas' },
  { id: '2', nome: 'Blusas', imagem: 'https://via.placeholder.com/150/FF69B4', tela: 'Blusas' },
  { id: '3', nome: 'Calças', imagem: require('../../assets/calça.jpg'), tela: 'Calças' },
  { id: '4', nome: 'Tênis', imagem: 'https://via.placeholder.com/150/FF4500', tela: 'Tenis' },
  { id: '5', nome: 'Acessórios', imagem: 'https://via.placeholder.com/150/0000FF', tela: 'Acessorios' },
];

export default function Categoria() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Categorias</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.listContainer} // Adicionar espaçamento superior para as categorias
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate(item.tela)}
            activeOpacity={0.7}
          >
            <Image source={item.imagem} style={styles.image} />
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centralizar o texto "Categorias"
    marginTop: 30, // Aumentar o espaçamento superior
    marginBottom: 20, // Aumentar o espaçamento inferior
  },
  backButton: {
    position: 'absolute',
    left: 10, // Manter a seta à esquerda
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000', // Alterar a cor para preto
  },
  listContainer: {
    marginTop: 20, // Aumentar o espaçamento entre o cabeçalho e as categorias
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
    marginRight: 20, // Removido borderRadius
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000', // Alterar a cor para preto
  },
});
