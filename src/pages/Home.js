import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import personalPhoto from '../components/personalphoto.PNG';
import Skills from '../sections/Skills';
import ProjectCard from '../components/ProjectCard';
import RelevantWorkExperience from '../sections/RelevantWorkExperience';
import Contact from '../sections/Contact';
import { featuredProjects } from '../data/projects';

const MotionBox = motion(Box);

function Home() {
  const accentColor = useColorModeValue('minimal.accent', 'minimal.text.dark');
  const textColor = useColorModeValue('minimal.text.light', 'minimal.text.dark');
  const mutedColor = useColorModeValue('gray.600', 'gray.400');
  const borderColor = useColorModeValue('rgba(0, 0, 0, 0.14)', 'rgba(255, 255, 255, 0.18)');

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/andryuxiong', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/andrew-xiong02/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:xiongandrew02@gmail.com', label: 'Email' },
  ];

  return (
    <Box minH="100vh" position="relative">
      <Box
        position="absolute"
        inset={0}
        opacity={useColorModeValue(0.055, 0.08)}
        backgroundImage="radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)"
        backgroundSize="34px 34px"
        pointerEvents="none"
        zIndex={0}
      />

      <Box as="section" pt={{ base: '120px', md: '145px' }} pb={{ base: 16, md: 20 }} position="relative" zIndex={1}>
        <Container maxW="1100px" px={{ base: 5, md: 8 }}>
          <Box mb={{ base: 9, md: 12 }}>
            <Text
              fontSize="sm"
              fontWeight="600"
              letterSpacing="0.08em"
              textTransform="uppercase"
              color={mutedColor}
            >
              <Typewriter
                words={[
                  'Software engineer',
                  'Full-stack developer',
                  'AI software engineer',
                  'Backend developer',
                  'Mobile app developer',
                ]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={65}
                deleteSpeed={40}
                delaySpeed={2200}
              />
            </Text>
          </Box>

          <Stack
            direction={{ base: 'column-reverse', md: 'row' }}
            spacing={{ base: 12, md: 16 }}
            align={{ base: 'start', md: 'center' }}
            justify="space-between"
          >
            <VStack align="start" spacing={0} flex="1" maxW="720px">
              <Heading
                as="h1"
                fontSize={{ base: '5xl', md: '6xl' }}
                lineHeight="1"
                letterSpacing="-0.065em"
                fontWeight="700"
              >
                Andrew Xiong
              </Heading>

              <Box w="44px" h="3px" bg={accentColor} mt={6} mb={7} />

              <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                lineHeight="1.5"
                letterSpacing="-0.028em"
                color={textColor}
              >
                Computer science graduate and software engineer building full-stack systems and applied-AI products.
              </Text>

              <Text
                mt={5}
                maxW="650px"
                fontSize={{ base: 'md', md: 'lg' }}
                lineHeight="1.8"
                color={mutedColor}
              >
                At Trusted Semiconductor Solutions, I built internal tools for engineers and marketers working with dense semiconductor data. My recent projects explore reproducible RAG evaluation, evidence-backed commerce research, and privacy-minded social coordination.
              </Text>

              <Flex mt={8} gap={5} align="center">
                {socialLinks.map(({ icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    isExternal={href.startsWith('http')}
                    aria-label={label}
                    color={accentColor}
                    _hover={{ opacity: 0.55, transform: 'translateY(-2px)' }}
                    transition="all 0.2s ease"
                  >
                    <Icon as={icon} boxSize={5} />
                  </Link>
                ))}
              </Flex>
            </VStack>

            <Image
              src={personalPhoto}
              alt="Andrew Xiong"
              width={{ base: '180px', md: '240px' }}
              height={{ base: '220px', md: '300px' }}
              objectFit="cover"
              objectPosition="center"
              border="1px solid"
              borderColor={borderColor}
              borderRadius="24px"
              boxShadow="0 20px 55px rgba(0, 0, 0, 0.14)"
              transition="transform 0.2s ease"
              _hover={{ transform: 'translateY(-4px)' }}
            />
          </Stack>

          <Flex
            mt={{ base: 12, md: 16 }}
            pt={5}
            borderTop="1px solid"
            borderColor={borderColor}
            gap={{ base: 3, md: 6 }}
            flexWrap="wrap"
            color={mutedColor}
            fontSize="sm"
          >
            <Text>Minneapolis, Minnesota</Text>
            <Text>Open to new-grad roles</Text>
            <Link href="mailto:xiongandrew02@gmail.com" color="inherit">xiongandrew02@gmail.com</Link>
          </Flex>
        </Container>
      </Box>

      <RelevantWorkExperience />

      <Container maxW="1200px" px={{ base: 5, md: 8 }} py={14} position="relative" zIndex={1}>
        <VStack spacing={10} w="100%">
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            letterSpacing="-0.045em"
            textAlign="center"
          >
            Featured Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={7} w="100%" alignItems="stretch">
            {featuredProjects.map((project, index) => (
              <MotionBox
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <Skills />
      <Contact />
    </Box>
  );
}

export default Home;
