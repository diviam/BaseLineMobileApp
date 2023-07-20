// GetStartedScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const GetStartedScreen = ({ navigation }) => {
    console.log("test");
    const handleGetStartedPress = () => {
        navigation.navigate('HomePage');
    };

    return (
        <View style={styles.container}>
            {/* Logo image */}
            <Image source={require('../../../assets/splash.png')} style={styles.logo} />
            <Text style={styles.header}>Welcome thhgo Baseline IT Development</Text>
            <TouchableOpacity style={styles.button} onPress={handleGetStartedPress}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

// ... (rest of the styles)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#3498db',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
export default GetStartedScreen;
