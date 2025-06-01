import { Box, HStack, IconButton, Link, useColorModeValue, Text } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const iconColor = useColorModeValue('ocean.accent', 'ocean.accent');

  return (
    <Box as="footer" id="footer" py={10} textAlign="center">

      <HStack spacing={6} justify="center" mb={4}>
        <Link href="https://www.linkedin.com/in/andrew-xiong02/" isExternal>
          <IconButton
            icon={<FaLinkedin />}
            aria-label="LinkedIn"
            variant="ghost"
            fontSize="5xl" // Enlarged icons
            color={iconColor}
            _hover={{ opacity: 0.8 }}
          />
        </Link>
        <Link href="https://github.com/andryuxiong" isExternal>
          <IconButton
            icon={<FaGithub />}
            aria-label="GitHub"
            variant="ghost"
            fontSize="5xl" // Enlarged icons
            color={iconColor}
            _hover={{ opacity: 0.8 }}
          />
        </Link>
        <Link href="mailto:xiongandrew@gmail.com">
          <IconButton
            icon={<FaEnvelope />}
            aria-label="Email"
            variant="ghost"
            fontSize="5xl" // Enlarged icons
            color={iconColor}
            _hover={{ opacity: 0.8 }}
          />
        </Link>
      </HStack>

      <Text fontSize="sm" color="gray.500">
          site last updated: 05/31/2025
      </Text>
    </Box>
  );
};

export default Footer;
