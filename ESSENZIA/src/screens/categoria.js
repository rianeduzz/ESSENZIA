import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const categorias = [
  { id: '1', nome: 'Camisas', imagem: require('../../assets/camisa.jpg'), tela: 'Camisas' },
  { id: '2', nome: 'Jaquetas', imagem: require('../../assets/jaqueta.jpg'), tela: 'Jaquetas' },
  { id: '3', nome: 'Calças', imagem: require('../../assets/calca.jpg'), tela: 'Calças' },
  { id: '4', nome: 'Sapatos', imagem: require('../../assets/sapato.jpg'), tela: 'Tenis' },
  { id: '5', nome: 'Acessórios', imagem: require('../../assets/acessorio.jpg'), tela: 'Acessorios' },
  
  
];

export default function Categoria() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Categorias</Text>
      </View>

      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(item.tela)}>
            <View style={styles.imageWrapper}>
              <Image source={item.imagem} style={styles.image} />
            </View>
            <Text style={styles.text}>{item.nome}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20, // mais espaço vertical
  },
  imageWrapper: {
    width: 80,
    height: 80,
    backgroundColor: '#F1F1F1',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  image: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  separator: {
    height: 1,
    backgroundColor: '#cccccc',
  },
});
