import { Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationLogin from './src/navigation/NavigationLogin';

const App = () => {
  return (
    <NavigationContainer>
      <NavigationLogin />
    </NavigationContainer>
  );
};

export default App;