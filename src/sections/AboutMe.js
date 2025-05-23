import { Box, Heading, Text, Container, VStack } from '@chakra-ui/react';
import Skills from './Skills';

const AboutMe = () => {
  return (
    <Box id="aboutme" py={16} bg="transparent">
      <Container maxW="container.md">
        <VStack align="start" spacing={4}>
          <Heading
            as="h2"
            size="lg"
            borderBottom="2px solid"
            borderColor="ocean.accent"
            pb={1}
            fontWeight="semibold"
          >
            About Me
          </Heading>

          <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="medium" lineHeight="1.8">
            Hi, I'm Andrew Xiong, a Computer Science student at Metropolitan State University and an aspiring Software Engineer. 
            I am passionate about building robust, scalable applications and leveraging technology to solve real-world problems. 
            My experience spans software development, data analysis, and cybersecurity, and I enjoy working on both personal and collaborative projects. 
            I am always eager to learn new technologies and contribute to innovative solutions.
          </Text>
        </VStack>
        <Skills />
      </Container>
    </Box>
  );
};

export default AboutMe;
