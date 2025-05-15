import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const products = [
  { id: '1', name: 'Jacket', price: '$100', image: require('../../assets/jaqueta.jpg') },
  { id: '2', name: 'Pant', price: '$20', image: require('../../assets/jaqueta.jpg') },
  { id: '3', name: 'Jacket', price: '$80', image: require('../../assets/jaqueta.jpg') },
  { id: '4', name: 'Dress', price: '$50', image: require('../../assets/jaqueta.jpg') },
  { id: '5', name: 'Shirt', price: '$30', image: require('../../assets/jaqueta.jpg') },
  { id: '6', name: 'Shoes', price: '$60', image: require('../../assets/jaqueta.jpg') },
  { id: '7', name: 'Hat', price: '$15', image: require('../../assets/jaqueta.jpg') },
  { id: '8', name: 'Socks', price: '$5', image: require('../../assets/jaqueta.jpg') },
  { id: '9', name: 'Belt', price: '$25', image: require('../../assets/jaqueta.jpg') },
];

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
const itemWidth = (screenWidth - 60) / numColumns; // padding + spacing

export default function HomeScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={[styles.productCard, { width: itemWidth }]}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.jpeg')} style={styles.logo} />

      <View style={styles.searchAndFilterContainer}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar"
            placeholderTextColor="gray"
          />
        </View>

        <View style={styles.filterContainer}>
          <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
            <Text style={styles.filterTextActive}>Tudo</Text>
          </TouchableOpacity>
          
        </View>
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  logo: {
    alignSelf: 'flex-start',
    resizeMode: 'contain',
    width: 150,
    height: undefined,
    aspectRatio: 1,
  },
  searchAndFilterContainer: {
    marginTop: -10,
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    height: 40,
    paddingVertical: 0,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  activeFilter: {
    backgroundColor: '#000',
  },
  filterText: {
    color: 'gray',
    fontSize: 14,
  },
  filterTextActive: {
    color: '#fff',
    fontSize: 14,
  },
  productList: {
    marginTop: 10,
    paddingBottom: 20,
  },
  productCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginBottom: 15,
    marginRight: 10,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 170,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 14,
    marginTop: 5,
    marginLeft: 10,
    color: '#444',
  },
  productPrice: {
    fontSize: 14,
    marginBottom: 10,
    marginLeft: 10,
    color: '#000',
    fontWeight: 'bold',
  },
});
