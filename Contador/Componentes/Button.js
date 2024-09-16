import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

    // Componente reutilizable de botón
    const CustomButton = ({ title, onPress, buttonStyle }) => {
    return (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
    };

    const styles = StyleSheet.create({
    button: {
        padding: 15,
        borderRadius: 5,
        marginVertical: 5,
        width: 150,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold",
    },
    });

    export default CustomButton;
