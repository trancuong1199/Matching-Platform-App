import { extendTheme } from "native-base"

export const theme = extendTheme({
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
      100: "#6db8be", // ok
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#006f7e", // OK
      700: "#006BA1",
      800: "#005885",
      900: "#313742" //OK
    },
    black: {
      50: '#898E9A',
      100: '#000',
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