import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryScreen = ({ route }) => {
    const { eventName, eventDate, eventLocation } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resumo do Evento</Text>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailLabel}>Nome:</Text>
                <Text style={styles.detailValue}>{eventName}</Text>
                <Text style={styles.detailLabel}>Data:</Text>
                <Text style={styles.detailValue}>{eventDate}</Text>
                <Text style={styles.detailLabel}>Local:</Text>
                <Text style={styles.detailValue}>{eventLocation}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 24,
    },
    detailsContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    detailLabel: {
        fontSize: 18,
        fontWeight: '600',
        color: '#555',
        marginBottom: 8,
    },
    detailValue: {
        fontSize: 18,
        color: '#333',
        marginBottom: 16,
    },
});

export default SummaryScreen;
