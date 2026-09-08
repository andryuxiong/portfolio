import {
    Box,
    Flex,
    HStack,
    IconButton,
    Link as ChakraLink,
    useDisclosure,
    Stack,
    Text,
    Container,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
  import { FiFileText } from 'react-icons/fi';
  import { motion } from 'framer-motion';
  import ThemeToggle from './ThemeToggle';
  import { useEffect } from 'react';
  import { Link as RouterLink, useLocation } from 'react-router-dom';
  
  const dashboardLinks = [
    { label: 'Projects', to: '/projects' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/#contact' },
  ];
  
  const MotionLink = motion(ChakraLink);
  const MotionBox = motion(Box);
  const MotionIconButton = motion(IconButton);
  
  const NavLink = ({ children, to = '/', onClick }) => (
      <MotionLink
        as={RouterLink}
        to={to}
        onClick={onClick}
        px={4}
        py={2}
        rounded="md"
        fontWeight="semibold"
        initial={{ opacity: 1 }}
        whileHover={{
          opacity: 0.8,
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
        _hover={{
          textDecoration: 'none',
          bg: 'minimal.accent',
          color: 'white',
        }}
      >
        {children}
      </MotionLink>
    );
  
  export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation();
    useEffect(() => { onClose(); }, [location.key, onClose]);
  
    return (
      <Box
        as="header"
        bg={useColorModeValue('rgba(255,255,255,0.96)', 'rgba(0,0,0,0.96)')}
        backdropFilter="blur(10px)"
        position="fixed"
        top={0}
        width="100%"
        zIndex={999}
      >
        <Container maxW="container.md" px={3}>
          <Flex h={16} alignItems="center" justifyContent="space-between">
            {/* Logo */}
            <MotionBox
              as={RouterLink}
              to="/"
              aria-label="Andrew Xiong home"
              onClick={onClose}
              whileHover={{
                rotate: [-1, 1, -0.5, 0.5, 0],
                scale: 1.1,
                transition: { duration: 0.5, ease: 'easeInOut' },
              }}
              whileTap={{ scale: 0.95 }}
              _hover={{ textDecoration: 'none' }}
              position="relative"
              overflow="hidden"
              borderRadius="md"
              px={3}
              py={1}
            >
              <Text
                fontWeight="bold"
                fontSize="3xl"
                color={useColorModeValue('minimal.accent', 'minimal.text.dark')}
              >
                AX
              </Text>
            </MotionBox>
  
            {/* Nav links (desktop) */}
            <HStack as="nav" aria-label="Main navigation" spacing={4} alignItems="center" display={{ base: 'none', md: 'flex' }}>
              <MotionLink
                href="https://drive.google.com/file/d/1U6rmfZ1_i4wypW7DAFumhqrY853p4E67/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                px={4}
                py={2}
                rounded="md"
                fontWeight="semibold"
                display="flex"
                alignItems="center"
                gap={2}
                initial={{ opacity: 1 }}
                whileHover={{
                  opacity: 0.85,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                _hover={{
                  textDecoration: 'none',
                  bg: 'minimal.accent',
                  color: 'white',
                }}
              >
                <FiFileText size={18} />
                Resume
              </MotionLink>
  
              {dashboardLinks.map(({ label, to }) => (
                <NavLink key={label} to={to} onClick={onClose}>
                  {label}
                </NavLink>
              ))}
              <ThemeToggle />
            </HStack>
  
            {/* ☰ Mobile Hamburger */}
            <MotionIconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
              color="inherit"
              variant="ghost"
              whileHover={{ scale: 1.1, opacity: 0.9 }}
              whileTap={{ scale: 0.95 }}
            />
          </Flex>
  
          {/* 📱 Mobile Nav */}
          {isOpen && (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as="nav" id="mobile-navigation" aria-label="Mobile navigation" spacing={4}>
                <ChakraLink
                  onClick={onClose}
                  href="https://drive.google.com/file/d/1U6rmfZ1_i4wypW7DAFumhqrY853p4E67/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  px={4}
                  py={2}
                  rounded="md"
                  fontWeight="semibold"
                  _hover={{ textDecoration: 'none', bg: 'minimal.accent', color: 'white' }}
                >
                  <HStack spacing={2}>
                    <FiFileText size={18} />
                    <span>Resume</span>
                  </HStack>
                </ChakraLink>
                {dashboardLinks.map(({ label, to }) => (
                  <NavLink key={label} to={to} onClick={onClose}>
                    {label}
                  </NavLink>
                ))}
                <ThemeToggle />
              </Stack>
            </Box>
          )}
        </Container>
      </Box>
    );
  }
