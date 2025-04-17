import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MainScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Bem-vindo à tela principal da ESSENZIA!</Text>
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
