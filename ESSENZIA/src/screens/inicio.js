import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Inicio({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/telainicio.png')} // Atualizado para usar o fundo correto
      style={styles.background}
    >
      <View style={styles.content}>
        <Text style={styles.title}>ESSENZIA</Text>
        <Text style={styles.subtitle}>Encontre seu Estilo</Text>
        <Text style={styles.description}>
          Seu luxo não espera. Nossa coleção também não.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Vamos Lá</Text>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: Dimensions.get('window').width, // Largura da tela
    height: Dimensions.get('window').height, // Altura da tela
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start', // Posiciona os elementos no início
    alignItems: 'center', // Centraliza horizontalmente
    marginTop: 550, // Move os elementos mais para baixo
    paddingHorizontal: 20, // Adiciona espaçamento lateral
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    marginRight: 10,
  },
});
