
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, RefreshControl, Alert, TextInput } from 'react-native';
import { supabase } from '../../services/supabaseClient';
import { fetchProducts } from '../../services/productsService';
import { fetchUserFavorites, toggleFavorite } from '../../services/favoritesService';
import ProductCard from '../../components/ProductCard';
import { Search } from 'lucide-react-native';

export default function HomeScreen() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadUser() {
      const { data, error } = await supabase.auth.getUser();
      if (!error) setUser(data.user);
    }
    loadUser();
    const { data: { subscription } } =
      supabase.auth.onAuthStateChange((_evt, session) => {
        setUser(session?.user ?? null);
      });
    return () => subscription.unsubscribe();
  }, []);

  const loadProducts = useCallback(async () => {
    setLoading(true);
    const { data, error } = await fetchProducts();
    setLoading(false);
    if (error) console.log('Erro ao buscar produtos:', error.message);
    else setProducts(data);
  }, []);

  const loadFavorites = useCallback(async () => {
    if (!user) {
      setFavoriteIds([]);
      return;
    }
    const { data, error } = await fetchUserFavorites(user.id);
    if (!error) setFavoriteIds(data.map(f => f.product_id));
  }, [user]);

  useEffect(() => {
    loadProducts();
    loadFavorites();
  }, [loadProducts, loadFavorites]);

  useEffect(() => {
    if (search.trim() === '') {
      setFilteredProducts(products);
    } else {
      const term = search.toLowerCase();
      setFilteredProducts(
        products.filter(p =>
          p.category.toLowerCase().includes(term)
        )
      );
    }
  }, [products, search]);

  const handleToggleFavorite = async (productId) => {
    if (!user) {
      return Alert.alert('Atenção', 'Faça login para favoritar.');
    }
    const { error } = await toggleFavorite(user.id, productId);
    if (error) console.log('Erro:', error.message);
    else loadFavorites();
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadProducts();
    await loadFavorites();
    setRefreshing(false);
  }, [loadProducts, loadFavorites]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#2a8bf2" />
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <View style={styles.searchContainer}>
        <Search size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInputWithIcon}
          placeholder="Buscar por categoria..."
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
          autoCorrect={false}
          clearButtonMode="while-editing"
        />
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            isFavorited={favoriteIds.includes(item.id)}
            onPressFavorite={handleToggleFavorite}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Nenhum produto encontrado para "{search}"
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f2f2f7' 
  },
  header: { 
    fontSize: 28, 
    fontWeight: '700', 
    marginTop: 16, 
    marginHorizontal: 16, 
    color: '#333' 
  },
  searchContainer: {
    marginTop: 12,
    marginHorizontal: 16,
    marginBottom: 4,
  },
  searchInput: {
    height: 44,
    borderRadius: 12,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    fontSize: 16,
    // Sombra iOS
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    // Elevação Android
    elevation: 3,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 32,
    fontSize: 16,
    color: '#666',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f7',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: 12,
    marginHorizontal: 16,
    marginBottom: 4,
    paddingHorizontal: 12,
    height: 44,
    // Sombra iOS
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    // Elevação Android
    elevation: 3,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInputWithIcon: {
    flex: 1,
    fontSize: 16,
    padding: 0,         // removido padding interno para alinhar
    color: '#333',
  },
});
