import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Perfil() {
  const handleEdit = () => {
    alert('Editar perfil ainda não implementado.');
  };

  const handleLogout = () => {
    alert('Você saiu da conta!');
    // Aqui você pode adicionar a lógica para deslogar o usuário.
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Ionicons name="person-circle-outline" size={150} color="black" />
      </View>
      <Text style={styles.userName}>Usuário</Text>
      <Text style={styles.email}>usuario@email.com</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleEdit}>
          <Ionicons name="create-outline" size={24} color="black" />
          <Text style={styles.actionText}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="red" />
          <Text style={[styles.actionText, styles.logoutText]}>Sair da Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 30,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 40,
  },
  actionsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  actionText: {
    color: '#000',
    fontSize: 18,
    marginLeft: 10,
  },
  logoutText: {
    color: 'red',
  },
});
