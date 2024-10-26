import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import NavigationProfile from './navigation/NavigationProfile';
import NavigationSettings from './navigation/NavigationSettings';

export default function DrawerScreen() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='Profile'
                component={NavigationProfile}
                options={{
                    headerShown: false
                }}
            />
            <Drawer.Screen
                name='Settings'
                component={NavigationSettings}
                options={{
                    headerShown: false
                }}
            />
        </Drawer.Navigator>
    )
}