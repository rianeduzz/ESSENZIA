import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from '../screens/inicio';
import HomeScreen from '../screens/homeScreen'; // Certifique-se de que o caminho está correto

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
