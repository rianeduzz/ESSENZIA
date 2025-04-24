import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Perfil() {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState('Usuário');
  const [email, setEmail] = useState('usuario@email.com');
  const [password, setPassword] = useState('');

  const handleSave = () => {
    alert(`Perfil atualizado!\nNome: ${userName}\nEmail: ${email}`);
    setIsEditing(false); // Sai do modo de edição
  };

  const handleLogout = () => {
    alert('Você saiu da conta!');
    // Aqui você pode adicionar a lógica para deslogar o usuário.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      {isEditing ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={userName}
            onChangeText={setUserName}
            placeholderTextColor="gray"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="gray"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="gray"
          />
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Salvar Alterações</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.infoText}>Nome: {userName}</Text>
          <Text style={styles.infoText}>Email: {email}</Text>
          <TouchableOpacity style={styles.button} onPress={() => setIsEditing(true)}>
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair da Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: '#000',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#ff0000',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
