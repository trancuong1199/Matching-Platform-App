import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
<<<<<<< HEAD
import {NavigationContainer} from '@react-navigation/native';
import Detail from './src/screen/detail';
import {customTheme} from './src/constants';
import BottomTabs from './src/navigations/BottomTabs';

const App = () => {
  return (
    <NavigationContainer>
    <BottomTabs />
  </NavigationContainer>
=======
import {NativeBaseProvider, Box, extendTheme} from 'native-base';
import Home from './src/screen/home';

export default function App() {
  const theme = extendTheme({
      components: {
        Badge: {
          defaultProps: {
            alignSelf: "center",
            rounded: 'full',
            variant: "subtle",
            colorScheme: 'coolGray',
            px: 3,
            py: 1.5,
            my: 2,
          }
        },
      }
  })

  return (
    <NativeBaseProvider theme={theme}>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Home />
      </Box>
    </NativeBaseProvider>
>>>>>>> feature/home
  );
}

export default App