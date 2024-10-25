import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: "lightblue", flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>LoginScreen</Text>
            <Button title='Moving between screens' onPress={() => navigation.navigate('Register')}></Button>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({});