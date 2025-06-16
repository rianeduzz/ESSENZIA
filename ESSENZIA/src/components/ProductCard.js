
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Heart } from 'lucide-react-native';

export default function ProductCard({ product, isFavorited, onPressFavorite }) {
  return (
    <View style={styles.card}>
      {product.image_url
        ? (
          <Image
            source={{ uri: product.image_url }}
            style={styles.image}
            resizeMode="cover"
          />
        )
        : (
          <View style={[styles.image, styles.placeholder]}>
            <Text>Sem imagem</Text>
          </View>
        )
      }

      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
        <Text style={styles.desc}>{product.description}</Text>
      </View>

      <TouchableOpacity onPress={() => onPressFavorite(product.id)}>
        <Heart
          size={24}
          color={isFavorited ? 'red' : '#999'}
          weight={isFavorited ? 'fill' : 'regular'}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    // sombra iOS
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    // elevação Android
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#eee',
  },
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    marginVertical: 4,
    color: '#2a8bf2',
  },
  desc: {
    fontSize: 12,
    color: '#666',
  },
});
