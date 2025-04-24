import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.jpeg')} style={styles.logo} />
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar"
          placeholderTextColor="gray"
        />
        <Ionicons name="lock-closed" size={20} color="gray" />
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, styles.activeFilter]}
          onPress={() => navigation.navigate('Todos')}
        >
          <Text style={styles.filterTextActive}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate('Feminino')}
        >
          <Text style={styles.filterText}>Feminino</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate('Masculino')}
        >
          <Text style={styles.filterText}>Masculino</Text>
        </TouchableOpacity>
      </View>
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
  logo: {
    width: 150, // Mantive o tamanho reduzido
    height: 25,
    alignSelf: 'flex-start', // Alinha a imagem para o canto esquerdo
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterButton: {
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  activeFilter: {
    backgroundColor: '#000',
  },
  filterText: {
    color: 'gray',
    fontSize: 14,
  },
  filterTextActive: {
    color: '#fff',
    fontSize: 14,
  },
});
