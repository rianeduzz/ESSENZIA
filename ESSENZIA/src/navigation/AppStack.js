import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Heart, User } from 'lucide-react-native';

import HomeScreen from '../screens/Home/homeScreen';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Home':
              return <Home color={color} size={size} />;
            case 'Favorites':
              return <Heart color={color} size={size} />;
            case 'Profile':
              return <User color={color} size={size} />;
            default:
              return null;
          }
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 6,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: -2,
          color: '#fff',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Início' }} />
      <Tab.Screen name="Favorites" component={Favorites} options={{ tabBarLabel: 'Favoritos' }} />
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Perfil' }} />
    </Tab.Navigator>
  );
}
