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

import Experience from '../sections/Experience';
import Skills from '../sections/Skills';
import ProjectCard from '../components/ProjectCard';
import RelevantWorkExperience from '../sections/RelevantWorkExperience';
import Contact from '../sections/Contact';
import { featuredProjects } from '../data/projects';

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

function Home() {
  const [useEmojis] = useState(true);
  const accentColor = useColorModeValue('minimal.accent', 'minimal.secondary.dark');
  const textColor = useColorModeValue('minimal.text.light', 'minimal.text.dark');
  const gradientBg = useColorModeValue(
    'linear(to-b, minimal.background.light, minimal.background.light, minimal.background.light)',
    'linear(to-b, minimal.background.dark, minimal.background.dark, minimal.background.dark)'
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
                  '🤖 AI Application Builder',
                  '🎓 Computer Science Graduate'
                ]
              : [
                  'Hi, I\'m Andrew Xiong',
                  'Software Engineer',
                  'Full Stack Developer',
                  'AI Application Builder',
                  'Computer Science Graduate'
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
              I'm a computer science graduate and software engineer focused on full-stack and AI-enabled applications. During my internship at Trusted Semiconductor Solutions, I built internal tools for engineering and marketing teams working with semiconductor data.
              <br /><br />
              I enjoy turning complex workflows into practical software, from deterministic Liberty timing analysis to local LLM-powered document processing. I'm currently exploring new-grad software engineering opportunities.
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
                      _hover={{ color: 'minimal.secondary.dark' }}
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

      <RelevantWorkExperience />
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
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
            {featuredProjects.map((project, index) => (
              <MotionBox
                key={project.title}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94] 
                }}
              >
                <ProjectCard {...project} />
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
      <Skills />
      <Experience />
      <Contact />
    </Box>
  );
}

export default Home;
