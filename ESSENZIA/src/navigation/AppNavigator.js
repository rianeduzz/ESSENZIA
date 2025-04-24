import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Login from '../screens/login';
import Register from '../screens/register';
import HomeScreen from '../screens/homeScreen';
import Categoria from '../screens/categoria';
import Favorito from '../screens/favorito';
import Perfil from '../screens/perfil';
import Carregamento from '../screens/carregamento';
import Femininos from '../screens/categorias/femininos';
import Masculinos from '../screens/categorias/masculinos';
import Camisas from '../screens/categorias/camisas';
import Calças from '../screens/categorias/calças';
import Tenis from '../screens/categorias/tenis';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Categoria') {
            iconName = 'grid';
          } else if (route.name === 'Favorito') {
            iconName = 'heart';
          } else if (route.name === 'Perfil') {
            iconName = 'person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
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
      <Stack.Screen name="Feminino" component={Femininos} />
      <Stack.Screen name="Masculino" component={Masculinos} />
      <Stack.Screen name="Camisas" component={Camisas} />
      <Stack.Screen name="Calças" component={Calças} />
      <Stack.Screen name="Tênis" component={Tenis} />
    </Stack.Navigator>
  );
}
