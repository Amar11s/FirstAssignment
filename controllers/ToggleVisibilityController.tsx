import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

const ToggleVisibilityController = () => {
    const [visible, setVisibility] = useState(true)

    const toggleVisibility = () => {
        setVisibility(!visible)
    }
    
    return (
        <View style={styles.container}>
            {visible ? (
                <Text style={styles.text}>Toggle Visibility</Text>
            ) : null}
            
            <Pressable 
                style={styles.button}
                onPress={toggleVisibility}
            >
                <Text style={styles.buttonText}>
                    {visible ? "Hide Text Block" : "Show Text Block"}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: 30,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 30,
        minWidth: 200,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});

export default ToggleVisibilityController;