import { Box, HStack, IconButton, useColorModeValue, Text } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const iconColor = useColorModeValue('minimal.accent', 'minimal.text.dark');

  return (
    <Box as="footer" id="footer" py={10} textAlign="center">

      <HStack spacing={6} justify="center" mb={4}>
        <IconButton as="a" href="https://www.linkedin.com/in/andrew-xiong02/" target="_blank" rel="noopener noreferrer"
            icon={<FaLinkedin />}
            aria-label="LinkedIn"
            variant="ghost"
            fontSize="5xl" // Enlarged icons
            color={iconColor}
            _hover={{ opacity: 0.8 }}
          />
        <IconButton as="a" href="https://github.com/andryuxiong" target="_blank" rel="noopener noreferrer"
            icon={<FaGithub />}
            aria-label="GitHub"
            variant="ghost"
            fontSize="5xl" // Enlarged icons
            color={iconColor}
            _hover={{ opacity: 0.8 }}
          />
        <IconButton as="a" href="mailto:xiongandrew02@gmail.com"
            icon={<FaEnvelope />}
            aria-label="Email"
            variant="ghost"
            fontSize="5xl" // Enlarged icons
            color={iconColor}
            _hover={{ opacity: 0.8 }}
          />
      </HStack>

      <Text fontSize="sm" color="gray.500">
          site last updated: 08/31/2026
      </Text>
    </Box>
  );
};

export default Footer;
