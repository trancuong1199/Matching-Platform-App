/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {NativeBaseProvider, Text, Box} from 'native-base';
import Detail from './src/screen/detail';
import {customTheme} from './src/constants';
export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <Detail />
    </NativeBaseProvider>
  );
}
