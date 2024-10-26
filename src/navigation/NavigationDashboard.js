import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/DashboardScreen';
import DrawerScreen from '../DrawerScreen';

const Stack = createNativeStackNavigator();

const NavigationDashboard = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='DrawerScreen' component={DrawerScreen} options={{ headerShown: false }} />
            {/* <Stack.Screen name='Dashboard' component={DashboardScreen} options={{ headerShown: true }} /> */}
        </Stack.Navigator>
    );
};

// eslint-disable-next-line eol-last
export default NavigationDashboard;