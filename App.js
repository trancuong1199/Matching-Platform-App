/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {NativeBaseProvider, Text, Box} from 'native-base';
import FilterScreen from './src/screen/filter/filter';
export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <FilterScreen/>
      </Box>
    </NativeBaseProvider>
  );
}
