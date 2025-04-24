import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Camisas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categoria: Camisas</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/300/32CD32' }}
        style={styles.image}
      />
      <Text style={styles.description}>
        Confira nossa coleção de camisas para todas as ocasiões.
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
