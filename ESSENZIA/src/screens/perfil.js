import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Perfil() {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Gerencie seu perfil aqui!</Text>
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
