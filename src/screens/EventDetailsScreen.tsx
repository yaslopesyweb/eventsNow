import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import InputField from '../components/InputField';

const EventDetailsScreen = ({ route, navigation }) => {
    const { eventName } = route.params;
    const [eventDate, setEventDate] = React.useState('');
    const [eventLocation, setEventLocation] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes do Evento</Text>
            <Text style={styles.subtitle}>Nome do Evento: {eventName}</Text>
            
            <InputField
                label="Data do Evento"
                value={eventDate}
                onChangeText={setEventDate}

            />
            
            <InputField
                label="Local do Evento"
                value={eventLocation}
                onChangeText={setEventLocation}

            />

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Summary', { eventName, eventDate, eventLocation })}
                disabled={!eventDate || !eventLocation} // desativa o botão se os campos estiverem vazios
            >
                <Text style={styles.buttonText}>Avançar para Resumo</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
        marginBottom: 24,
    },
    button: {
        backgroundColor: '#ff6347',
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default EventDetailsScreen;
