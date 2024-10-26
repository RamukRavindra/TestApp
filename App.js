import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationLogin from './src/navigation/NavigationLogin';
import NavigationDashboard from './src/navigation/NavigationDashboard';

const App = () => {
  return (
    <NavigationContainer>
      {/* <NavigationDashboard /> */}
      <NavigationLogin />
    </NavigationContainer>
  );
};

export default App;