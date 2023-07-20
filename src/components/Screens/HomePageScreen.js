// HomePageScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomePageScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to the Homepage!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
});

export default HomePageScreen;
