import { TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

export default function NavigationProfile(props) {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='ProfileScreen'
                component={Profile}
                options={{
                    headerShown: true,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => props.navigation.openDrawer()}
                        >
                            <Image
                                source={require('../assets/icons/ic_home.png')}
                                style={{ marginRight: 15, tintColor: 'black', width: 20, height: 15 }}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    )
}