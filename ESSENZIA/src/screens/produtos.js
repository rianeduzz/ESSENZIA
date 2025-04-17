import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Produtos() {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Explore nossos produtos exclusivos!</Text>
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
