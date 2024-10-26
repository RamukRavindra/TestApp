import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { Button } from 'react-native';
import DrawerScreen from '../DrawerScreen';

const Stack = createNativeStackNavigator();

const NavigationLogin = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    title: "Dashboard",
                    headerStyle: {
                        backgroundColor: '#f4511e'
                    },
                    headerTintColor: "white",
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    headerRight: () => <Button title='Update count' />,
                }}
            />
            <Stack.Screen name='Register' component={RegisterScreen} initialParams={{ company: "IT Company" }} /> */}
            <Stack.Screen name='DrawerScreen' component={DrawerScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

// eslint-disable-next-line eol-last
export default NavigationLogin;