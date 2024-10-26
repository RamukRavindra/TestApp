import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const LoginScreen = ({ navigation }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button title='update count' onPress={() => setCount((e) => e + 1)} />
            ),
        });
    }, [navigation]);
    return (
        <View style={{ backgroundColor: "lightblue", flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
                <Text style={{ margin: 5, fontSize: 21, fontWeight: "bold" }}>Count : {count}</Text>
                <Button title='Reset' onPress={() => setCount(0)} />
            </View>
            <Button title='Moving between screens' onPress={() => navigation.navigate('Register', {
                name: "Ravindra",
                age: "24",
                job: "App Developer"
            })}></Button>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({});