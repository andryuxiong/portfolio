import { Box, Heading, Text, HStack, Link, VStack, Image, useColorModeValue, Tag, TagLabel, Flex, Badge, Icon, Tooltip } from '@chakra-ui/react';
import { FaLink, FaGithub, FaCode, FaStar, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const placeholderImg = 'https://via.placeholder.com/400x180?text=Project+Image';

// Create motion components with proper typing
const MotionBox = motion(Box);
const MotionImage = motion(Image);

const ProjectCard = ({ title, description, github, demo, image, techStack = [], date = '2024' }) => {
  const cardBg = useColorModeValue('white', 'gray.900');
  const textColor = useColorModeValue('minimal.secondary.light', 'minimal.secondary.dark');
  const iconColor = useColorModeValue('minimal.accent', 'minimal.text.dark');
  const tagBg = useColorModeValue('minimal.accent', 'minimal.secondary.dark');
  
  // Pre-define all color values to avoid calling hooks inside callbacks
  const cardShadow = useColorModeValue(
    '0 4px 20px rgba(0,0,0,0.08)', 
    '0 4px 20px rgba(255,255,255,0.02)'
  );
  const imageShadow = useColorModeValue(
    '0 8px 25px rgba(0,0,0,0.1)', 
    '0 8px 25px rgba(255,255,255,0.02)'
  );
  const badgeBg = useColorModeValue('rgba(255,255,255,0.95)', 'rgba(0,0,0,0.8)');
  const badgeColor = useColorModeValue('#000000', '#ffffff');
  const tagHoverShadow = useColorModeValue(
    '0 4px 12px rgba(0,0,0,0.15)', 
    '0 4px 12px rgba(255,255,255,0.1)'
  );
  const buttonBg = useColorModeValue('rgba(0,0,0,0.05)', 'rgba(255,255,255,0.05)');
  const buttonBorder = useColorModeValue('rgba(0,0,0,0.1)', 'rgba(255,255,255,0.1)');
  const buttonHoverBg = useColorModeValue('rgba(0,0,0,0.08)', 'rgba(255,255,255,0.08)');
  const buttonHoverBorder = useColorModeValue('rgba(0,0,0,0.2)', 'rgba(255,255,255,0.2)');

  return (
    <MotionBox
      whileHover={{ y: -2, scale: 1.01 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      bg={cardBg}
      borderRadius="xl"
      boxShadow={cardShadow}
      w="100%"
      minH="220px"
      mb={4}
      p={5}
      position="relative"
      overflow="hidden"
    >
      <VStack align="center" spacing={2} w="100%">
        <Box position="relative" w="100%" display="flex" justifyContent="center" mb={3}>
          <MotionImage
            src={image || placeholderImg}
            alt={title + ' image'}
            borderRadius="xl"
            w="100%"
            maxW="340px"
            maxH="140px"
            objectFit="cover"
            boxShadow={imageShadow}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
          <Badge
            position="absolute"
            top={3}
            right={3}
            bg={badgeBg}
            color={badgeColor}
            variant="solid"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="0.75em"
            fontWeight="600"
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
          size="lg"
          color={iconColor}
          fontWeight="600"
          textAlign="center"
          letterSpacing="tight"
          mb={3}
        >
          {title}
        </Heading>
        
        <Text 
          color={textColor} 
          fontSize="md" 
          lineHeight="relaxed" 
          textAlign="center"
          mb={4}
        >
          {description}
        </Text>

        <Flex wrap="wrap" gap={2} justify="center" mb={4}>
          {techStack.map((tech) => (
            <Tooltip key={tech} label={`Built with ${tech}`} placement="top" hasArrow>
              <Tag
                size="md"
                borderRadius="full"
                variant="solid"
                bg={tagBg}
                color="white"
                fontWeight="500"
                letterSpacing="wide"
                px={3}
                py={1}
                cursor="pointer"
                transition="all 0.2s"
                _hover={{ 
                  transform: 'translateY(-1px)',
                  boxShadow: tagHoverShadow
                }}
              >
                <TagLabel>{tech}</TagLabel>
              </Tag>
            </Tooltip>
          ))}
        </Flex>

        <HStack spacing={4} w="100%" justify="center">
          {github && (
            <Link href={github} isExternal _hover={{ textDecoration: 'none' }}>
              <Box
                bg={buttonBg}
                px={4}
                py={2}
                borderRadius="full"
                display="flex"
                alignItems="center"
                gap={2}
                border="1px solid"
                borderColor={buttonBorder}
                cursor="pointer"
                transition="all 0.2s"
                _hover={{
                  backgroundColor: buttonHoverBg,
                  borderColor: buttonHoverBorder
                }}
              >
                <Icon as={FaGithub} color={iconColor} boxSize={4} />
                <Text fontSize="sm" color={iconColor} fontWeight="500">GitHub</Text>
              </Box>
            </Link>
          )}
          {demo && (
            <Link href={demo} isExternal _hover={{ textDecoration: 'none' }}>
              <Box
                bg={buttonBg}
                px={4}
                py={2}
                borderRadius="full"
                display="flex"
                alignItems="center"
                gap={2}
                border="1px solid"
                borderColor={buttonBorder}
                cursor="pointer"
                transition="all 0.2s"
                _hover={{
                  backgroundColor: buttonHoverBg,
                  borderColor: buttonHoverBorder
                }}
              >
                <Icon as={FaLink} color={iconColor} boxSize={4} />
                <Text fontSize="sm" color={iconColor} fontWeight="500">Demo</Text>
              </Box>
            </Link>
          )}
        </HStack>
      </VStack>
    </MotionBox>
  );
};

export default ProjectCard;