import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Femininos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categoria: Feminino</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/300/FF69B4' }}
        style={styles.image}
      />
      <Text style={styles.description}>
        Explore nossa coleção de roupas e acessórios femininos.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});
