// src/pages/Projects.js
import { Box, Heading, SimpleGrid, Text, VStack, useColorModeValue, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const MotionBox = motion(Box);
const Projects = () => {
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const accentColor = useColorModeValue('minimal.accent', 'minimal.text.dark');
  const borderColor = useColorModeValue('rgba(0, 0, 0, 0.14)', 'rgba(255, 255, 255, 0.18)');

  return (
    <Box minH="100vh" position="relative" overflow="hidden">
      <Box
        position="absolute"
        inset={0}
        opacity={useColorModeValue(0.055, 0.08)}
        backgroundImage="radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)"
        backgroundSize="34px 34px"
        pointerEvents="none"
      />

      <Container
        maxW="1200px"
        px={{ base: 5, md: 8 }}
        pt={{ base: '120px', md: '145px' }}
        pb={{ base: 16, md: 24 }}
        position="relative"
      >
        <Box maxW="760px" mb={{ base: 12, md: 16 }}>
          <Text
            fontSize="sm"
            fontWeight="600"
            letterSpacing="0.08em"
            textTransform="uppercase"
            color={textColor}
            mb={5}
          >
            Selected work
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '6xl' }}
            lineHeight="1"
            letterSpacing="-0.06em"
          >
            Projects built around real engineering problems.
          </Heading>
          <Box w="44px" h="3px" bg={accentColor} mt={7} mb={7} />
          <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.8">
            Full-stack products, evaluation systems, mobile infrastructure, data pipelines,
            and applied machine-learning experiments—with the technical details and limitations
            kept visible.
          </Text>
        </Box>

        <Box borderTop="1px solid" borderColor={borderColor} pt={{ base: 10, md: 12 }}>
          <VStack spacing={8} w="100%">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={7} w="100%" alignItems="stretch">
              {projects.map((project, index) => (
                <MotionBox
                  key={project.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
                  w="100%"
                  h="100%"
                >
                  <ProjectCard {...project} location="projects" />
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
