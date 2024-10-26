import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function RegisterScreen(props) {
    console.log('props', props.route.params);

    return (
        <View>
            <Text>RegisterScreen</Text>
        </View>
    );
}

// eslint-disable-next-line eol-last, no-unused-vars
const styles = StyleSheet.create({});