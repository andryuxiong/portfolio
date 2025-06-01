// src/pages/Projects.js
import { Box, Heading, SimpleGrid, Center, Text, VStack, useColorModeValue, Container, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import medicareLogo from '../assets/projects/medicare-logo.png';
import portfolioScreenshot from '../assets/projects/portfolio-screenshot.png';
import labubuBotImg from '../assets/projects/labubu-bot.png';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const placeholderImg = 'https://via.placeholder.com/400x180?text=Project+Image';

const projects = [
  {
    title: 'MarketSeer Stock Predictor',
    description:
      '(STILL IN DEVELOPMENT)A full-stack stock analysis and prediction platform built with React, TypeScript, and FastAPI. Features real-time stock data visualization, portfolio tracking, and machine learning market predictions. Includes interactive charts, dark/light mode, and responsive design. Built using Plotly.js for data visualization using Finnhub API for real-time stock data.',
    github: 'https://github.com/andryuxiong/marketseer',
    demo: '', // will add link when deployed
    image: 'https://via.placeholder.com/400x180?text=MarketSeer',
    techStack: ['React', 'TypeScript', 'FastAPI', 'Python', 'Chakra UI', 'Plotly.js'],
    date: '2025'
  },
  {
    title: 'AI Medicare Assistant',
    description:
      'A full-stack virtual health assistant, featuring real-time symptom analysis and medical recommendations. Built with React.js, Java Spring Boot, and Web Speech API. Includes voice input, dark mode, and responsive design. Successfully deployed on Vercel and Railway.',
    github: 'https://github.com/andryuxiong/medicare-ai',
    demo: 'https://medicare-ai-three.vercel.app/',
    image: medicareLogo,
    techStack: ['React.js', 'Java', 'Spring Boot', 'OpenAI API', 'Web Speech API', 'Chakra UI'],
    date: '2024'
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A modern, responsive portfolio website showcasing my projects, experience, and skills. Features a clean, interactive design with smooth animations, dark/light mode, and a mobile-first approach. Built with React and Chakra UI, demonstrating frontend development skills and attention to user experience.',
    github: 'https://github.com/andryuxiong/portfolio',
    demo: '', // the demo is this website
    image: portfolioScreenshot,
    techStack: ['React.js', 'Chakra UI', 'Framer Motion', 'JavaScript'],
    date: '2025'
  },
  {
    title: '2D Platformer Game',
    description:
      'A Mario-inspired platformer built in Java using Swing and AWT, featuring custom physics, sprite animation, and level design. Performance optimizations and unique enhancements.',
    github: 'https://github.com/andryuxiong/2D-Platform-Game',
    demo: '', // Placeholder for now
    image: placeholderImg,
    techStack: ['Java', 'Swing', 'AWT'],
    date: '2023'
  },
  {
    title: 'Labubu Bot',
    description:
      'An automated bot built with Python and Selenium for monitoring and purchasing limited-edition Pop Mart collectibles. Features include real-time availability checking, automatic cart addition, Discord notifications, and anti-detection measures. Implements human-like behavior patterns and robust error handling.',
    github: 'https://github.com/andryuxiong/labububot',
    demo: '', // No demo available as it's a bot
    image: labubuBotImg,
    techStack: ['Python', 'Selenium', 'Discord Webhook', 'Web Automation'],
    date: '2025'
  },
];

const Projects = () => {
  const bgColor = useColorModeValue('linear(to-br, #e0eafc, #cfdef3)', 'linear(to-br, #232526, #414345)');
  const textColor = useColorModeValue('ocean.text.light', 'ocean.text.dark');
  const accentColor = useColorModeValue('ocean.accent', 'ocean.secondary.light');

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
            Explore my portfolio of my technical projects!
          </MotionText>

          <Divider 
            borderColor={accentColor} 
            opacity={0.3} 
            w="80%" 
            mb={4}
          />

          {/* Responsive two-column grid layout */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={1} w="100%" align="stretch" justifyItems="center" maxW="820px" mx="auto">
            {projects.map((project, index) => (
              <MotionBox
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.03 }}
                w="100%"
                maxW="400px"
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
