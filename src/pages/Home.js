// src/pages/Home.js
import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Container,
  VStack,
  Image,
  Stack,
  useColorModeValue,
  Icon,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import personalPhoto from '../components/personalphoto.PNG';
import medicareLogo from '../assets/projects/medicare-logo.png';
import portfolioScreenshot from '../assets/projects/portfolio-screenshot.png';
import labubuBotImg from '../assets/projects/labubu-bot.png';
import marketseerImg from '../assets/projects/marketseer.png';

import Experience from '../sections/Experience';
import Skills from '../sections/Skills';
import ProjectCard from '../components/ProjectCard';

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const projects = [
  {
    title: 'MarketSeer Stock Predictor',
    description:
      'A full-stack stock analysis and prediction platform built with React, TypeScript, and FastAPI. Features real-time stock data visualization, portfolio tracking, and machine learning market predictions. Includes interactive charts, and responsive design. Built using Plotly.js for data visualization using Finnhub/yfinance API for real-time stock data. Will implement news Natural Language Processinglater!',
    github: 'https://github.com/andryuxiong/marketseer',
    demo: 'https://market-seer.vercel.app/', 
    image: marketseerImg,
    techStack: ['React', 'TypeScript', 'FastAPI', 'Python', 'Chakra UI', 'Plotly.js', 'Pandas', 'Finnhub/yFinance API', 'TenserFlow LSTM Machine Learning Model'],
    date: '2025'
  },
  {
    title: 'AI Medicare Assistant',
    description:
      'An AI-powered healthcare assistant that helps users understand their symptoms and navigate Medicare coverage. Features include real-time symptom analysis, personalized medical recommendations, and voice interaction capabilities. Built with a modern tech stack including React.js and Java Spring Boot, the application provides an intuitive interface for users to access healthcare information and guidance.',
    github: 'https://github.com/andryuxiong/medicare-ai',
    demo: 'https://medicare-ai-three.vercel.app/',
    image: medicareLogo,
    techStack: ['React.js', 'Java', 'Spring Boot', 'OpenAI API', 'Web Speech API', 'Chakra UI'],
    date: '2024'
  },
  {
    title: 'Labubu Bot',
    description:
      'An automated bot built with Python and Selenium for monitoring and purchasing limited-edition Pop Mart collectibles. Features real-time availability checking, automatic cart addition, Discord notifications, and anti-detection measures.',
    github: 'https://github.com/andryuxiong/labububot',
    demo: '', // No demo available as it's a bot
    image: labubuBotImg,
    techStack: ['Python', 'Selenium', 'Discord API', 'Web Automation'],
    date: '2024'
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A modern, responsive portfolio website showcasing my projects, experience, and skills. Features a clean, interactive design with smooth animations, dark/light mode, and a mobile-first approach. Built with React and Chakra UI, demonstrating frontend development skills and attention to user experience.',
    github: 'https://github.com/andryuxiong/portfolio',
    demo: '', // the website itself lol
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
    image: 'https://via.placeholder.com/400x180?text=Project+Image',
    techStack: ['Java', 'Swing', 'AWT', 'Object-Oriented Programming'],
    date: '2023'
  },
];

function Home() {
  const [useEmojis] = useState(true);
  const accentColor = useColorModeValue('ocean.accent', 'ocean.secondary.light');
  const textColor = useColorModeValue('ocean.text.light', 'ocean.text.dark');
  const bgColor = useColorModeValue('ocean.background.light', 'ocean.background.dark');
  const gradientBg = useColorModeValue(
    'linear(to-b, ocean.background.light, ocean.background.light, ocean.background.light)',
    'linear(to-b, ocean.background.dark, ocean.background.dark, ocean.background.dark)'
  );

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/andryuxiong', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/andrew-xiong02/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:xiongandrew02@gmail.com', label: 'Email' },
  ];

  return (
    <Box pt="80px" minH="100vh" position="relative" bgGradient={gradientBg}>
      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.1"
        backgroundImage="radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)"
        backgroundSize="40px 40px"
        zIndex="0"
      />

      {/* Typewriter Section Above Header */}
      <MotionBox 
        textAlign="center" 
        pb={6}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        position="relative"
        zIndex="3"
      >
        <Heading 
          as="h2" 
          size="xl" 
          fontWeight="semibold" 
          color={accentColor}
          textShadow="0 0 20px rgba(0,0,0,0.1)"
        >
          <Typewriter
            words={useEmojis
              ? [
                  '👋🏻 Hi, I\'m Andrew Xiong',
                  '💻 Software Engineer',
                  '🌐 Full Stack Developer',
                  '🎓 Computer Science Student',
                  '🚀 Problem Solver'
                ]
              : [
                  'Hi, I\'m Andrew Xiong',
                  'Software Engineer',
                  'Full Stack Developer',
                  'Computer Science Student',
                  'Problem Solver'
                ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </Heading>
      </MotionBox>

      <Container maxW="container.md" px={3} py={10} position="relative" zIndex="3">
        <Stack
          spacing={6}
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'center', md: 'center' }}
          justify="space-between"
        >
          {/* Text content */}
          <VStack
            align={{ base: 'center', md: 'start' }}
            spacing={3}
            flex="1"
            textAlign={{ base: 'center', md: 'left' }}
          >
            <MotionHeading
              as="h1"
              size="2xl"
              fontWeight="bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              position="relative"
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-5px',
                left: 0,
                width: '100%',
                height: '3px',
                bg: accentColor,
                borderRadius: 'full',
                boxShadow: '0 0 10px rgba(0,0,0,0.2)'
              }}
            >
              Andrew Xiong
            </MotionHeading>

            <MotionText 
              fontSize={{ base: 'md', md: 'lg' }} 
              fontWeight="medium" 
              lineHeight="1.8"
              color={textColor}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              textShadow="0 0 10px rgba(0,0,0,0.1)"
            >
              Hey there! I'm a Junior at Metropolitan State University studying Computer Science. I love turning ideas into reality through code, whether it's building helpful applications or creating fun games.
              <br /><br />
              My goal is to become a software engineer who makes a lot of MONEY😂! Just kidding, I enjoy coding and learning new technologies.
              <br /><br />
              When I'm not coding, you'll find me exploring new technologies and working on projects... or playing video games!
            </MotionText>

            {/* Social Links */}
            <Flex gap={4} mt={2}>
              {socialLinks.map(({ icon, href, label }) => (
                <MotionBox
                  key={label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon
                      as={icon}
                      w={6}
                      h={6}
                      color={accentColor}
                      _hover={{ color: 'ocean.secondary.dark' }}
                      transition="all 0.2s"
                      filter="drop-shadow(0 0 2px rgba(0,0,0,0.2))"
                    />
                  </a>
                </MotionBox>
              ))}
            </Flex>
          </VStack>

          {/* Responsive image */}
          <MotionImage
            src={personalPhoto}
            alt="Andrew Xiong"
            width={{ base: '160px', md: '200px' }}
            maxW="200px"
            height="auto"
            border="3px solid"
            borderColor={accentColor}
            borderRadius="2xl"
            objectFit="cover"
            alignSelf={{ base: 'center', md: 'flex-start' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            boxShadow="xl"
            filter="drop-shadow(0 0 10px rgba(0,0,0,0.2))"
          />
        </Stack>

        {/* Scroll Indicator */}
        <MotionBox
          position="absolute"
          bottom="20px"
          left="50%"
          transform="translateX(-50%)"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ y: 5 }}
        >
          <FaChevronDown color={accentColor} size={24} />
        </MotionBox>
      </Container>

      {/* Projects Section */}
      <Container maxW="container.md" px={3} py={10} position="relative" zIndex="3">
        <VStack spacing={8} w="100%">
          <MotionHeading
            as="h2"
            size="xl"
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
            Featured Projects
          </MotionHeading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
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

      <Skills />
      <Experience />
    </Box>
  );
}

export default Home;