import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/homeScreen';
import Categoria from '../screens/categoria';
import Favorito from '../screens/favorito';
import Produtos from '../screens/produtos';
import Register from '../screens/register';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
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
          } else if (route.name === 'Produtos') {
            iconName = 'cart';
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
      <Tab.Screen name="Produtos" component={Produtos} />
      <Tab.Screen name="Perfil" component={Register} />
    </Tab.Navigator>
  );
}
