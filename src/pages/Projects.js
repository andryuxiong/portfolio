// src/pages/Projects.js
import { Box, Heading, SimpleGrid, Center, Text, VStack, useColorModeValue, Container, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const placeholderImg = 'https://via.placeholder.com/400x180?text=Project+Image';

const projects = [
  {
    title: '2D Platformer Game',
    description:
      'A Mario-inspired platformer built in Java using Swing and AWT, featuring custom physics, sprite animation, and level design. Performance optimizations and unique enhancements.',
    github: '', // Placeholder for now
    demo: '', // Placeholder for now
    image: placeholderImg,
    techStack: ['Java', 'Swing', 'AWT', 'Object-Oriented Programming'],
    date: '2023'
  },
  {
    title: 'AI Medicare',
    description:
      'A full-stack virtual health assistant using React.js, Java, Spring Boot, and Web Speech API. Enables users to describe symptoms via voice or text and receive actionable, context-aware medical recommendations. Plans to integrate advanced AI for symptom analysis.',
    github: 'https://github.com/andryuxiong/medicare-ai',
    demo: 'https://medicare-ai-three.vercel.app/',
    image: placeholderImg,
    techStack: ['React.js', 'Java', 'Spring Boot', 'Web Speech API'],
    date: '2024'
  },
];

const Projects = () => {
  const bgColor = useColorModeValue('ocean.background.light', 'ocean.background.dark');
  const textColor = useColorModeValue('ocean.text.light', 'ocean.text.dark');
  const accentColor = useColorModeValue('ocean.accent', 'ocean.secondary.light');

  return (
    <Center pt="100px" minHeight="100vh" px={6} bg={bgColor}>
      <Container maxW="1200px">
        <VStack spacing={8} w="100%">
          <MotionHeading
            as="h1"
            size="2xl"
            fontWeight="bold"
            color={accentColor}
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
            Explore my portfolio of projects showcasing my skills in software development and problem-solving.
          </MotionText>

          <Divider 
            borderColor={accentColor} 
            opacity={0.3} 
            w="80%" 
            mb={4}
          />

          <SimpleGrid 
            columns={{ base: 1, md: 2 }} 
            spacing={8}
            w="100%"
          >
            {projects.map((project, index) => (
              <MotionBox
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <ProjectCard {...project} />
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Center>
  );
};

export default Projects;
