import React from 'react';
import { View } from 'react-native'; // ✅ Importação necessária para React Native
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Login from '../screens/login';
import Register from '../screens/register';
import HomeScreen from '../screens/homeScreen';
import Categoria from '../screens/categoria';
import Favorito from '../screens/favorito';
import Perfil from '../screens/perfil';
import Carregamento from '../screens/carregamento';
import Camisas from '../screens/categorias/camisas';
import Calças from '../screens/categorias/calças';
import Tenis from '../screens/categorias/tenis';
import Blusas from '../screens/categorias/blusas';
import Acessorios from '../screens/categorias/acessorios';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Categoria') {
            iconName = 'grid';
          } else if (route.name === 'Favorito') {
            iconName = 'heart';
          } else if (route.name === 'Perfil') {
            iconName = 'user';
          }

          return (
            <View
              style={{
                backgroundColor: focused ? '#333' : 'transparent', // Fundo branco quando selecionado
                borderRadius: 50,
                padding: 3,
              }}
            >
              <Feather
                name={iconName}
                size={focused ? 24 : 24}
                color={focused ? '#fff' : color} // Ícone preto quando selecionado
              />
            </View>
          );
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: 'white',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 12,
          paddingTop: 16,
          position: 'absolute',
          bottom: 70, // Ajusta a posição para evitar sobreposição
          marginHorizontal: 50, // Diminui a largura da barra
          borderRadius: 30, // Aumenta o borderRadius
          backgroundColor: '#000', // Garante que apenas a barra branca seja visível
          shadowColor: '#fff',
          shadowOffset: { width: 20, height: 24 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 10,
        },
        tabBarItemStyle: {
          marginHorizontal: -10, // Aproxima os ícones
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categoria" component={Categoria} />
      <Tab.Screen name="Favorito" component={Favorito} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Carregamento" component={Carregamento} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Camisas" component={Camisas} />
      <Stack.Screen name="Jaquetas" component={Blusas} />
      <Stack.Screen name="Calças" component={Calças} />
      <Stack.Screen name="Tenis" component={Tenis} />
      <Stack.Screen name="Acessorios" component={Acessorios} />
    </Stack.Navigator>
  );
}
