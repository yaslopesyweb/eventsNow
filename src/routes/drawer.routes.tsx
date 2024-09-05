import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import SummaryScreen from '../screens/SummaryScreen';
import { RootStackParamsList } from '../../types/navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';


const DrawerNavigator = createDrawerNavigator<RootStackParamsList>()

export default function DrawerNavigation() {
    <DrawerNavigator.Navigator>
        <DrawerNavigator.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <DrawerNavigator.Screen name="EventDetails" component={EventDetailsScreen} options={{ title: 'Detalhes do Evento'}}/>
        <DrawerNavigator.Screen name="Summary" component={SummaryScreen} options={{title: 'Resumo do evento'}}/>
    </DrawerNavigator.Navigator>
}