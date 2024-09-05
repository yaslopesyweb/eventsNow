import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import InputField from '../components/InputField';

const HomeScreen = ({ navigation }) => {
    const [eventName, setEventName] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crie Seu Evento</Text>
            <Text style={styles.subtitle}>Insira o nome do evento abaixo:</Text>
            
            <InputField
                label="Nome do Evento"
                value={eventName}
                onChangeText={setEventName}
            />

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('EventDetails', { eventName })}
                disabled={!eventName} // desativa o botão se o campo estiver vazio
            >
                <Text style={styles.buttonText}>Avançar</Text>
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
        fontSize: 16,
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

export default HomeScreen;
