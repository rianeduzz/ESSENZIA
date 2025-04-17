import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Favorito() {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Seus produtos favoritos estão aqui!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    message: {
        fontSize: 16,
        color: '#333',
    },
});
