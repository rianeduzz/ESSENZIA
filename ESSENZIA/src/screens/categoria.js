import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Categoria() {
  return (
    <View style={styles.container}>
      <Text>Esta é a tela Categoria!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
