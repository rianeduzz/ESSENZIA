import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Perfil() {
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [userName, setUserName] = useState('Usuário');
  const [userPhoto, setUserPhoto] = useState(null);
  const [tempName, setTempName] = useState(userName);
  const [tempPhoto, setTempPhoto] = useState(userPhoto);

  // Carregar dados salvos
  useEffect(() => {
    const loadData = async () => {
      const savedName = await AsyncStorage.getItem('userName');
      const savedPhoto = await AsyncStorage.getItem('userPhoto');
      if (savedName) setUserName(savedName);
      if (savedPhoto && savedPhoto !== 'null' && savedPhoto !== '') setUserPhoto(savedPhoto);
      else setUserPhoto(null);
    };
    loadData();
  }, []);

  const handleLogout = () => {
    alert('Você saiu da conta!');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleOpenConfig = () => {
    setTempName(userName);
    setTempPhoto(userPhoto);
    setShowConfig(true);
  };

  const handleSaveConfig = async () => {
    setUserName(tempName);
    setUserPhoto(tempPhoto && tempPhoto !== '' ? tempPhoto : null);
    await AsyncStorage.setItem('userName', tempName);
    await AsyncStorage.setItem('userPhoto', tempPhoto && tempPhoto !== '' ? tempPhoto : '');
    setShowConfig(false);
  };

  // Selecionar imagem do dispositivo
  const handlePickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.status !== 'granted') {
      alert('Permissão para acessar a galeria é necessária!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setUserPhoto(result.assets[0].uri);
      await AsyncStorage.setItem('userPhoto', result.assets[0].uri);
    }
  };

  return (
    <View style={[styles.container, darkMode && { backgroundColor: '#121212' }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Perfil */}
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={handlePickImage} style={styles.avatarButton}>
            {userPhoto && userPhoto !== '' ? (
              <View style={styles.avatar}>
                <Image source={{ uri: userPhoto }} style={styles.avatarImage} />
              </View>
            ) : (
              <View
                style={[
                  styles.avatar,
                  {
                    backgroundColor: darkMode ? '#222' : '#eee',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}
              >
                <Feather name="user" size={40} color={darkMode ? '#fff' : '#888'} />
              </View>
            )}
          </TouchableOpacity>
          <View>
            <Text style={[styles.name, darkMode && { color: '#fff' }]}>{userName}</Text>
            <Text style={[styles.verified, darkMode && { color: '#ccc' }]}>
              Verified Profile ✅
            </Text>
          </View>
        </View>

        {/* Dark Mode */}
        <View style={styles.darkModeContainer}>
          <Feather name="sun" size={20} color="gray" />
          <Text style={[styles.darkModeText, darkMode && { color: '#fff' }]}>
            Dark Mode
          </Text>
          <Switch value={darkMode} onValueChange={handleToggleDarkMode} />
        </View>

        {/* Menu */}
        <View style={styles.menuContainer}>
          <MenuItem icon="lock" text="Senha" darkMode={darkMode} />
          <MenuItem
            icon="heart"
            text="Favoritos"
            onPress={() => navigation.navigate('Favorito')}
            darkMode={darkMode}
          />
          <MenuItem
            icon="settings"
            text="Configurações"
            onPress={handleOpenConfig}
            darkMode={darkMode}
          />
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logout} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="red" />
          <Text style={[styles.logoutText, darkMode && { color: '#fff' }]}>
            Sair da conta
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal de Configurações */}
      {showConfig && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                marginBottom: 10,
                color: darkMode ? '#fff' : '#000',
              }}
            >
              Editar Perfil
            </Text>
            <Text style={{ color: darkMode ? '#fff' : '#000' }}>Nome:</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
                marginBottom: 10,
              }}
            >
              <TextInput
                value={tempName}
                onChangeText={setTempName}
                style={{ padding: 8, color: darkMode ? '#fff' : '#000' }}
                placeholderTextColor={darkMode ? '#ccc' : '#888'}
              />
            </View>
            <Text style={{ color: darkMode ? '#fff' : '#000' }}>URL da Foto:</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
                marginBottom: 10,
              }}
            >
              <TextInput
                value={tempPhoto}
                onChangeText={setTempPhoto}
                style={{ padding: 8, color: darkMode ? '#fff' : '#000' }}
                placeholderTextColor={darkMode ? '#ccc' : '#888'}
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TouchableOpacity onPress={() => setShowConfig(false)} style={{ marginRight: 15 }}>
                <Text style={{ color: 'red' }}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSaveConfig}>
                <Text style={{ color: 'green' }}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

// Componente para item de menu
const MenuItem = ({ icon, text, onPress, darkMode }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Feather name={icon} size={22} color={darkMode ? '#fff' : 'black'} />
    <Text style={[styles.menuText, darkMode && { color: '#fff' }]}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarButton: {
    marginRight: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  verified: {
    color: 'gray',
    fontSize: 14,
  },
  darkModeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  darkModeText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  menuContainer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 20,
    marginBottom: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#000',
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  logoutText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'red',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '85%',
    elevation: 5,
  },
});
