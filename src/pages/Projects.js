// src/pages/Projects.js
import { Box, Heading, SimpleGrid, Center, Text, VStack, useColorModeValue, Container, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const Projects = () => {
  const bgColor = useColorModeValue('linear(to-br, #e0eafc, #cfdef3)', 'linear(to-br, #232526, #414345)');
  const textColor = useColorModeValue('minimal.text.light', 'minimal.text.dark');
  const accentColor = useColorModeValue('minimal.accent', 'minimal.secondary.dark');

  return (
    <Center pt="100px" minHeight="100vh" px={6} bgGradient={bgColor}>
      <Container maxW="1200px">
        <VStack spacing={8} w="100%">
          <MotionHeading
        as="h1"
        size="2xl"
        fontWeight="bold"
        color={accentColor}
        display="flex"
        alignItems="center"
        gap={3}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        textAlign="center"
        position="relative"
        _after={{
          content: '""',
          position: 'absolute',
          bottom: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60px',
          height: '4px',
          bg: accentColor,
          borderRadius: 'full',
        }}
      >
        Technical Projects
          </MotionHeading>
          
          <MotionText
            color={textColor}
            fontSize="lg"
            textAlign="center"
            maxW="800px"
            mb={4}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Selected systems spanning RAG evaluation, full-stack product engineering,
            mobile infrastructure, data ingestion, and applied machine learning.
          </MotionText>

          <Divider 
            borderColor={accentColor} 
            opacity={0.3} 
            w="80%" 
            mb={4}
          />

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={7} w="100%" align="stretch">
            {projects.map((project, index) => (
              <MotionBox
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                w="100%"
                h="100%"
              >
                <ProjectCard {...project} location="projects" />
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
  </Center>
);
};

export default Projects;
