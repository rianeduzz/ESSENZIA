import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'; // Substituir Ionicons por Feather
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
            iconName = 'grid'; // Ícone mais bonito para categorias
          } else if (route.name === 'Favorito') {
            iconName = 'heart';
          } else if (route.name === 'Perfil') {
            iconName = 'user';
          }

          return (
            <div
              style={{
                backgroundColor: focused ? '#333' : 'transparent', // Fundo mais discreto
                borderRadius: 20, // Fundo arredondado
                padding: 8, // Espaçamento ajustado
              }}
            >
              <Feather
                name={iconName}
                size={focused ? 24 : 20} // Ícone menor e mais minimalista
                color={focused ? 'white' : color} // Ícone branco quando ativo
              />
            </div>
          );
        },
        tabBarActiveTintColor: '#333',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false, // Remove os nomes abaixo dos ícones
        tabBarStyle: {
          height: 70, // Altura maior
          paddingBottom: 16, // Espaçamento inferior ajustado
          paddingTop: 16, // Espaçamento superior ajustado
          position: 'absolute', // Posiciona a barra de forma absoluta
          bottom: 10, // Move a barra mais para cima
          marginHorizontal: 10, // Margem lateral para centralizar
          borderRadius: 20, // Bordas arredondadas
          backgroundColor: '#fff', // Fundo branco para contraste
          shadowColor: '#000', // Sombra para destaque
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5, // Sombra no Android
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
      <Stack.Screen name="Blusas" component={Blusas} />
      <Stack.Screen name="Calças" component={Calças} />
      <Stack.Screen name="Tenis" component={Tenis} />
      <Stack.Screen name="Acessorios" component={Acessorios} />
    </Stack.Navigator>
  );
}
