import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from "react-native";

const CustomButton = ({title}) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 340,
        height: 42,
        backgroundColor: '#000000',
        padding: 10,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 500,
        fontStyle: 'normal',
    }
});

export default CustomButton;
