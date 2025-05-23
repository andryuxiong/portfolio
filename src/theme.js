// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    ocean: {
      accent: '#219EBC',      // Ocean blue for highlights
      background: {
        light: '#E0FBFC',     // Light blue for light mode
        dark: '#023047',      // Deep blue for dark mode
      },
      text: {
        light: '#023047',     // Deep blue for text in light mode
        dark: '#FFFFFF',      // White text in dark mode
      },
      secondary: {
        light: '#8ECAE6',     // Light blue for highlights in light mode
        dark: '#126782',      // Darker blue for highlights in dark mode
      },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'light' ? 'ocean.background.light' : 'ocean.background.dark',
        color: props.colorMode === 'light' ? 'ocean.text.light' : 'ocean.text.dark',
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
