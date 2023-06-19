/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/navigations/BottomTabs';

const App = () => {
  return (
    <NavigationContainer>
    <BottomTabs />
  </NavigationContainer>
  );
}

export default App