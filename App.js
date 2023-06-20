import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Detail from './src/screen/detail';
import {customTheme} from './src/constants';
import BottomTabs from './src/navigations/BottomTabs';
import Example from './src/screen/detail/detail_second';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
