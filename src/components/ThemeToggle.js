// src/components/ThemeToggle.js
import { IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
        onClick={toggleColorMode}
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        borderRadius="full"
        size="md"
        variant="ghost"
        aria-label="Toggle theme"
        color={colorMode === 'light' ? 'minimal.text.light' : 'minimal.text.dark'}
        transition="all 0.3s ease"
        _hover={{
            bg: colorMode === 'light' ? 'minimal.secondary.light' : 'minimal.secondary.dark',
            color: colorMode === 'light' ? 'minimal.text.light' : 'minimal.text.dark',
            transform: 'scale(1.05)',
            boxShadow: 'md',
        }}
/>

  );
};

export default ThemeToggle;
