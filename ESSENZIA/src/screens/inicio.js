import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Inicio() {
    return (
        <ImageBackground source={require('../../assets/telainicio.png')} style={styles.background}>
            <View style={styles.content}>
                <Text style={styles.title}>Encontre seu Estilo</Text>
                <Text style={styles.subtitle}>Seu luxo não espera. Nossa coleção também não.</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Vamos Lá</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    content: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
