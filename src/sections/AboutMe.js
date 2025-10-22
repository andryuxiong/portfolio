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
            borderColor="minimal.accent"
            pb={1}
            fontWeight="semibold"
          >
            About Me
          </Heading>

          <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="medium" lineHeight="1.8">
            Hi, I'm Andrew Xiong, a Computer Science student at Metropolitan State University and an aspiring Software Engineer. 
            I specialize in full-stack development and AI integration, with a focus on creating intuitive, user-friendly applications. 
            My recent work includes developing an AI-powered healthcare assistant using OpenAI GPT-4, showcasing my ability to combine 
            modern web technologies with cutting-edge AI capabilities. I'm passionate about building robust, scalable applications 
            and leveraging technology to solve real-world problems. My experience spans software development, AI integration, 
            and cloud deployment, and I'm always eager to learn new technologies and contribute to innovative solutions.
          </Text>
        </VStack>
        <Skills />
      </Container>
    </Box>
  );
};

export default AboutMe;
