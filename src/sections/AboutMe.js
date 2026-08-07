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
            Hi, I'm Andrew Xiong, a computer science graduate and software engineer focused on full-stack systems and applied AI.
            I enjoy building the entire path from a usable interface to APIs, data models, retrieval workflows, and evaluation evidence.
            My recent projects include a reproducible RAG evaluation platform, a provenance-aware commerce intelligence system, and a
            privacy-minded mobile coordination app. I also built internal semiconductor data and document tools during my internship at
            Trusted Semiconductor Solutions.
          </Text>
        </VStack>
        <Skills />
      </Container>
    </Box>
  );
};

export default AboutMe;
