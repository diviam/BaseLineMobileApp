import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { FontAwesome5 } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

const ServiceCards = ({ icon, title, content }) => {
    const navigation = useNavigation();

    const handleCardPress = () => {
        // Navigate to the next screen when the card is pressed
        icon === 'laptop-code' && navigation.navigate( 'WebDesigning'); // Replace 'NextScreen' with the screen name you want to navigate to
    };
    return (
        <TouchableOpacity onPress={handleCardPress}>
            <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>
                    <FontAwesome5 name={icon} size={24} color="#bb372a" />
                    <Title style={styles.cardTitle}>{title}</Title>
                    <Paragraph style={styles.cardContentText}>{content}</Paragraph>
                    {/* <FontAwesome5 name="arrow-right" size={24} color="#333" style={styles.arrowIcon} /> */}
                </Card.Content>
            </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
        padding: 16,
        borderRadius: 8,
        elevation: 3, // For Android shadow
    },
    cardContent: {
        alignItems: 'center',
    },
    cardTitle: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        // flex: 1,
    },
    cardContentText: {
        marginTop: 10,

    },
    arrowIcon: {
        marginLeft: 'auto',
        color: '#bb372a'
    },
});

export default ServiceCards;
