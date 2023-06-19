import React from 'react';
import { NativeBaseProvider, Box, extendTheme } from 'native-base';
import FilterScreen from './src/screen/filter/filter';
export default function App() {
  const theme = extendTheme({
    colors: {
      primary: {
        50: "#f3fefe", //OK
        100: "#e8f0f1", //OK
        200: "#A2D4EC",
        300: "#7AC1E4",
        400: "#47A9DA",
        500: "#0088CC",
        600: "#006f7e", //OK
        700: "#006BA1",
        800: "#005885",
        900: "#003F5E"
      },
      info: {
        50: "#f3fefe", // ok
        100: "##6db8be", // ok
        200: "#A2D4EC",
        300: "#7AC1E4",
        400: "#47A9DA",
        500: "#0088CC",
        600: "#006f7e", // OK
        700: "#006BA1",
        800: "#005885",
        900: "#313742" //OK
      },
    },
    components: {
      Link: {
        baseStyle: {
          _text: {
            color: 'gray.600',
          }
        }
      },
      Button: {
        baseStyle: {
          rounded: 'lg'
        }
      },
      Badge: {
        defaultProps: {
          alignSelf: "center",
          rounded: 'full',
          variant: "subtle",
          colorScheme: 'coolGray',
          px: 3,
          py: 2,
          my: 2,
        }
      },
    }
  })


  return (
    <NativeBaseProvider theme={theme}>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <FilterScreen />
        {/* <DetailScreen/> */}
      </Box>
    </NativeBaseProvider>
  );
}