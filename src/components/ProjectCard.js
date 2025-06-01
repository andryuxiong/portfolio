import { Box, Heading, Text, HStack, Link, VStack, Image, useColorModeValue, Tag, TagLabel, Flex, Badge, Icon, Tooltip } from '@chakra-ui/react';
import { FaLink, FaGithub, FaCode, FaStar, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const placeholderImg = 'https://via.placeholder.com/400x180?text=Project+Image';

// Create motion components with proper typing
const MotionBox = motion(Box);
const MotionImage = motion(Image);

const ProjectCard = ({ title, description, github, demo, image, techStack = [], date = '2024' }) => {
  const cardBg = useColorModeValue('rgba(255,255,255,0.7)', 'rgba(26,32,44,0.85)'); // light: glass, dark: dark glass
  const textColor = useColorModeValue('gray.700', 'gray.100');
  const borderColor = useColorModeValue('ocean.accent', 'ocean.secondary.dark');
  const iconColor = useColorModeValue('ocean.accent', 'ocean.secondary.light');
  const tagBg = useColorModeValue('ocean.secondary.light', 'ocean.secondary.dark');
  const gradientBar = useColorModeValue('linear(to-r, #0f2027, #2c5364)', 'linear(to-r, #232526, #414345)');

  return (
    <MotionBox
      whileHover={{ y: -8, scale: 1.03, boxShadow: '0 4px 16px rgba(44,83,100,0.10)' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      bg={cardBg}
      style={{ backdropFilter: 'blur(10px)' }}
      borderRadius="xl"
      borderWidth={1}
      borderColor={borderColor}
      boxShadow="0 2px 8px rgba(44,83,100,0.06)"
      overflow="hidden"
      position="relative"
      mb={2}
      minH="260px"
    >
      {/* Gradient accent bar */}
      <Box h="4px" w="100%" bgGradient={gradientBar} mb={1} />
      <VStack align="start" spacing={2} p={3} h="100%">
        <Box position="relative" w="100%">
          <MotionImage
            src={image || placeholderImg}
            alt={title + ' image'}
            borderRadius="md"
            mb={1}
            w="100%"
            maxH="120px"
            objectFit="cover"
            transition="transform 0.3s ease"
            whileHover={{ scale: 1.03 }}
            filter="brightness(0.97)"
            _hover={{ filter: 'brightness(1)' }}
          />
          <Badge
            position="absolute"
            top={2}
            right={2}
            colorScheme="blue"
            variant="solid"
            px={2}
            py={0.5}
            borderRadius="full"
            fontSize="0.75em"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <Icon as={FaCalendarAlt} />
            {date}
          </Badge>
        </Box>
        <Heading
          as="h4"
          size="sm"
          color="ocean.accent"
          fontWeight="bold"
          display="flex"
          alignItems="center"
          gap={2}
        >
          <FaCode size={14} />
          {title}
        </Heading>
        <Text color={textColor} fontSize="sm" lineHeight="tall">
          {description}
        </Text>
        {/* Tech Stack Tags - more minimal */}
        <Flex wrap="wrap" gap={1} mt={1}>
          {techStack.map((tech) => (
            <Tooltip key={tech} label={`Built with ${tech}`} placement="top">
              <Tag
                size="sm"
                borderRadius="full"
                variant="solid"
                bgGradient={gradientBar}
                color="white"
                fontWeight="medium"
                letterSpacing="wide"
                transition="all 0.2s"
                _hover={{ transform: 'scale(1.05)', bg: 'ocean.accent', color: 'white' }}
              >
                <TagLabel>{tech}</TagLabel>
              </Tag>
            </Tooltip>
          ))}
        </Flex>
        <HStack spacing={4} mt={2} w="100%" justify="space-between">
          <HStack spacing={4}>
            {github && (
              <Link 
                href={github} 
                isExternal 
                display="flex" 
                alignItems="center" 
                _hover={{ textDecoration: 'none' }}
              >
                <MotionBox
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <FaGithub size={20} color={iconColor} style={{ marginRight: 6, cursor: 'pointer' }} />
                </MotionBox>
                <Text fontSize="sm" color="ocean.accent" fontWeight="medium">GitHub</Text>
              </Link>
            )}
            {demo && (
              <Link 
                href={demo} 
                isExternal 
                display="flex" 
                alignItems="center" 
                _hover={{ textDecoration: 'none' }}
              >
                <MotionBox
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <FaLink size={20} color={iconColor} style={{ marginRight: 6, cursor: 'pointer' }} />
                </MotionBox>
                <Text fontSize="sm" color="ocean.accent" fontWeight="medium">Demo</Text>
              </Link>
            )}
          </HStack>
          <Badge 
            colorScheme="blue" 
            variant="subtle"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <Icon as={FaStar} />
            Featured
          </Badge>
        </HStack>
      </VStack>
    </MotionBox>
  );
};

export default ProjectCard; 