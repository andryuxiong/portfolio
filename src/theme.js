// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    minimal: {
      accent: '#000000',
      background: {
        light: '#FFFFFF',
        dark: '#000000',
      },
      text: {
        light: '#000000',
        dark: '#FFFFFF',
      },
      secondary: {
        light: '#666666',
        dark: '#999999',
      },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'light' ? 'minimal.background.light' : 'minimal.background.dark',
        color: props.colorMode === 'light' ? 'minimal.text.light' : 'minimal.text.dark',
        transition: 'background-color 0.2s ease, color 0.2s ease',
      },
    }),
  },
  fonts: {
    heading: "Poppins, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif",
    body: "Poppins, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif",
  },
});

export default theme;
