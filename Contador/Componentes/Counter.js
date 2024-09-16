import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from './Button'; // Importa el componente del botón

    const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount(count + 1);
    };

    const reiniciar = () => {
        setCount(0);
    };

    return (
        <View style={styles.container}>
        <View style={styles.counterBox}>
            <Text style={styles.counterText}>{count}</Text>
        </View>

        {/* Reemplaza los botones con el componente CustomButton */}
        <CustomButton title="Clic" onPress={incrementar} buttonStyle={styles.incrementButton} />
        <CustomButton title="Reiniciar" onPress={reiniciar} buttonStyle={styles.resetButton} />
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    counterBox: {
        borderWidth: 2,
        borderColor: "#fff",
        padding: 30,
        marginBottom: 20,
        alignItems: "center",
    },
    counterText: {
        fontSize: 80,
        color: "white",
    },
    incrementButton: {
        backgroundColor: "blue",
    },
    resetButton: {
        backgroundColor: "green",
        marginTop: 10,
    },
    });

    export default Counter;
