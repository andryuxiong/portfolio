import { Box, Heading, Text, HStack, Link, VStack, Image, useColorModeValue, Tag, TagLabel, Flex, Badge, Icon, Tooltip } from '@chakra-ui/react';
import { FaLink, FaGithub, FaCode, FaStar, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const placeholderImg = 'https://via.placeholder.com/400x180?text=Project+Image';

// Create motion components with proper typing
const MotionBox = motion(Box);
const MotionImage = motion(Image);

const ProjectCard = ({ title, description, github, demo, image, techStack = [], date = '2024' }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const borderColor = useColorModeValue('ocean.accent', 'ocean.secondary.dark');
  const iconColor = useColorModeValue('ocean.accent', 'ocean.secondary.light');
  const tagBg = useColorModeValue('ocean.secondary.light', 'ocean.secondary.dark');
  const gradientBg = useColorModeValue(
    'linear(to-br, ocean.secondary.light, white)',
    'linear(to-br, ocean.secondary.dark, gray.800)'
  );

  return (
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Box 
        borderWidth={2} 
        borderRadius="lg" 
        borderColor={borderColor}
        bg={cardBg}
        p={5} 
        boxShadow="lg"
        w="100%"
        transition="all 0.3s ease"
        _hover={{ boxShadow: 'xl' }}
        position="relative"
        overflow="hidden"
        bgGradient={gradientBg}
      >
        {/* Decorative corner accent */}
        <Box
          position="absolute"
          top={0}
          right={0}
          w="100px"
          h="100px"
          bg={useColorModeValue('ocean.secondary.light', 'ocean.secondary.dark')}
          opacity={0.1}
          transform="rotate(45deg) translate(50%, -50%)"
        />

    <VStack align="start" spacing={3}>
          <Box position="relative" w="100%">
            <MotionImage
        src={image || placeholderImg}
        alt={title + ' image'}
        borderRadius="md"
        mb={2}
        w="100%"
        maxH="180px"
        objectFit="cover"
              transition="transform 0.3s ease"
              whileHover={{ scale: 1.02 }}
              filter="brightness(0.95)"
              _hover={{ filter: 'brightness(1)' }}
      />
            <Badge
              position="absolute"
              top={2}
              right={2}
              colorScheme="blue"
              variant="solid"
              px={2}
              py={1}
              borderRadius="full"
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
            size="md" 
            color="ocean.accent"
            fontWeight="bold"
            display="flex"
            alignItems="center"
            gap={2}
          >
            <FaCode size={16} />
            {title}
          </Heading>

          <Text 
            color={textColor}
            fontSize="md"
            lineHeight="tall"
          >
            {description}
          </Text>

          {/* Tech Stack Tags */}
          <Flex wrap="wrap" gap={2} mt={2}>
            {techStack.map((tech) => (
              <Tooltip key={tech} label={`Built with ${tech}`} placement="top">
                <Tag
                  size="sm"
                  borderRadius="full"
                  variant="subtle"
                  bg={tagBg}
                  color="ocean.accent"
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
  </Box>
    </MotionBox>
);
};

export default ProjectCard; 