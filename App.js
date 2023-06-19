import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Detail from './src/screen/detail';
import {customTheme} from './src/constants';
import BottomTabs from './src/navigations/BottomTabs';

const App = () => {
  return (
    <NavigationContainer>
    <BottomTabs />
  </NavigationContainer>
  );
}

export default App