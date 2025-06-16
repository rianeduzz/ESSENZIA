import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { supabase } from '../services/supabaseClient';
import ProductCard from '../components/ProductCard';

export default function Favorites() {
  const [user, setUser]         = useState(null);
  const [favProducts, setFavProducts] = useState([]);
  const [loading, setLoading]   = useState(false);

  useEffect(() => {
    async function loadUser() {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Erro ao obter usuário:', error.message);
      } else {
        setUser(data.user);
      }
    }
    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    async function loadFavoriteProducts() {
      if (!user) {
        setFavProducts([]);
        return;
      }

      setLoading(true);
      const { data, error } = await supabase
        .from('favorites')
        .select(`
          product_id,
          product:products (
            id,
            name,
            description,
            price,
            image_url,
            category
          )
        `)
        .eq('user_id', user.id);

      setLoading(false);
      if (error) {
        console.log('Erro ao buscar favoritos:', error.message);
        Alert.alert('Erro', 'Não foi possível carregar seus favoritos.');
      } else {
        setFavProducts(data.map(row => row.product));
      }
    }

    loadFavoriteProducts();
  }, [user]);

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#2a8bf2" />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={[styles.container, styles.emptyContainer]}>
        <Text style={styles.emptyText}>Faça login para ver seus favoritos.</Text>
      </View>
    );
  }

  if (favProducts.length === 0) {
    return (
      <View style={[styles.container, styles.emptyContainer]}>
        <Text style={styles.emptyText}>Você ainda não favoritou nenhum produto.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meus Favoritos</Text>
      <FlatList
        data={favProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            isFavorited={true}
            onPressFavorite={() => {
              Alert.alert('Toque no produto na Home para desfavoritar.');
            }}
          />
        )}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 12,
    marginLeft: 16,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});
