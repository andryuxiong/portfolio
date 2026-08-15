import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  ListItem,
  Tag,
  TagLabel,
  Text,
  UnorderedList,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const ProjectCard = ({
  title,
  context,
  description,
  highlights = [],
  github,
  demo,
  image,
  imageFit = 'cover',
  techStack = [],
  date = '2026',
}) => {
  const cardBg = useColorModeValue('white', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const mutedColor = useColorModeValue('gray.600', 'gray.400');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const mediaBg = useColorModeValue('gray.100', 'gray.800');
  const tagBg = useColorModeValue('gray.100', 'gray.800');
  const buttonBg = useColorModeValue('black', 'white');
  const buttonColor = useColorModeValue('white', 'black');

  return (
    <MotionBox
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      bg={cardBg}
      border="1px solid"
      borderColor={borderColor}
      borderRadius="2xl"
      boxShadow="0 18px 50px rgba(0, 0, 0, 0.08)"
      w="100%"
      h="100%"
      overflow="hidden"
    >
      <Box h="190px" bg={mediaBg} overflow="hidden" position="relative">
        {image ? (
          <MotionImage
            src={image}
            alt={`${title} preview`}
            w="100%"
            h="100%"
            objectFit={imageFit}
            p={imageFit === 'contain' ? 5 : 0}
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.35 }}
          />
        ) : (
          <Flex
            h="100%"
            align="center"
            justify="center"
            bgGradient="linear(to-br, gray.900, gray.700)"
            color="white"
          >
            <Text fontSize="5xl" fontWeight="black" letterSpacing="tight">
              {title
                .split(' ')
                .slice(0, 2)
                .map((word) => word[0])
                .join('')}
            </Text>
          </Flex>
        )}
        <Badge
          position="absolute"
          top={4}
          right={4}
          bg={cardBg}
          color="inherit"
          px={3}
          py={1}
          borderRadius="full"
          boxShadow="sm"
        >
          {date}
        </Badge>
      </Box>

      <VStack align="stretch" spacing={4} p={6}>
        <Box>
          <Text
            color={mutedColor}
            fontSize="xs"
            fontWeight="bold"
            letterSpacing="widest"
            textTransform="uppercase"
            mb={2}
          >
            {context}
          </Text>
          <Heading as="h3" size="lg" letterSpacing="tight">
            {title}
          </Heading>
        </Box>

        <Text color={textColor} lineHeight="1.7">
          {description}
        </Text>

        {highlights.length > 0 && (
          <UnorderedList spacing={2} pl={1} color={textColor} fontSize="sm">
            {highlights.map((highlight) => (
              <ListItem key={highlight}>{highlight}</ListItem>
            ))}
          </UnorderedList>
        )}

        <Flex wrap="wrap" gap={2}>
          {techStack.map((tech) => (
            <Tag key={tech} size="sm" borderRadius="full" bg={tagBg} px={3} py={1}>
              <TagLabel>{tech}</TagLabel>
            </Tag>
          ))}
        </Flex>

        {(github || demo) && (
          <HStack spacing={3} pt={1}>
            {github && (
              <Link href={github} isExternal _hover={{ textDecoration: 'none' }}>
                <HStack
                  bg={buttonBg}
                  color={buttonColor}
                  px={4}
                  py={2}
                  borderRadius="full"
                  spacing={2}
                >
                  <Icon as={FaGithub} />
                  <Text fontSize="sm" fontWeight="semibold">Source</Text>
                </HStack>
              </Link>
            )}
            {demo && (
              <Link href={demo} isExternal _hover={{ textDecoration: 'none' }}>
                <HStack px={4} py={2} spacing={2}>
                  <Text fontSize="sm" fontWeight="semibold">Live demo</Text>
                  <Icon as={FaArrowUpRightFromSquare} boxSize={3} />
                </HStack>
              </Link>
            )}
          </HStack>
        )}
      </VStack>
    </MotionBox>
  );
};

export default ProjectCard;
