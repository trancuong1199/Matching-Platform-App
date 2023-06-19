import React from 'react';
import { NativeBaseProvider, Box,Text } from 'native-base';
import { theme } from './src/assets/theme/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
    </NativeBaseProvider>
  );
}