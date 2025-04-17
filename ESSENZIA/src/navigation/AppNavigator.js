import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Carregamento from '../screens/carregamento';
import Inicio from '../screens/inicio';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Carregamento" component={Carregamento} />
                <Stack.Screen name="Inicio" component={Inicio} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
