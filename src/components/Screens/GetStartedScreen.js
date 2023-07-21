// GetStartedScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const GetStartedScreen = ({ navigation }) => {
    const handleGetStartedPress = () => {
        navigation.navigate('ContactUs');
    };

    return (
        <View style={styles.container}>
            {/* Logo image */}
            <Image source={require('../../../assets/baselinelogo.png')} style={styles.logo} />
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
        width: 400,
        height: 120,
        marginBottom: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    button: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#bb372a',
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
