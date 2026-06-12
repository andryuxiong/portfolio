import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

const questions = [
  {
    question: 'What did Andrew build during his internship?',
    answer:
      'Andrew built internal AI applications for engineering and marketing teams at Trusted Semiconductor Solutions. His work included a Liberty timing intelligence workbench for semiconductor engineers and DataBriefPilot, a local desktop application that transformed technical datasheets into structured marketing content.',
  },
  {
    question: 'Tell me about the timing workbench.',
    answer:
      'The Semiconductor Timing Intelligence Workbench parses and compares Liberty timing libraries. It exposes cells, pins, timing arcs, setup and hold constraints, internal power, leakage, buses, PVT corner metadata, and source provenance through a FastAPI backend and React interface.',
  },
  {
    question: 'What is DataBriefPilot?',
    answer:
      'DataBriefPilot is an Electron and React/TypeScript desktop application built for a semiconductor marketing team. It uses FastAPI, local Mixtral inference through llama.cpp, RAG, PyMuPDF, OpenCV, LaTeX/SVG generation, PDF previews, and Windows packaging.',
  },
  {
    question: 'What is Andrew strongest at technically?',
    answer:
      'Andrew is strongest at connecting frontend, backend, and AI components into practical applications. His primary tools include Python, Java, React, FastAPI, Spring Boot, RAG pipelines, local LLM inference, REST APIs, and document-processing workflows.',
  },
  {
    question: 'What kind of role is Andrew looking for?',
    answer:
      'Andrew is seeking new-grad software engineering opportunities, particularly full-stack, backend, and AI application roles where he can build useful products and work across multiple parts of a system.',
  },
  {
    question: "What is Andrew's education?",
    answer:
      "Andrew earned a Bachelor of Science in Computer Science from Metropolitan State University in May 2026 with a 3.54 GPA. He also earned an Associate of Science in Computer Science from Century College in May 2024 and made the Dean's List.",
  },
  {
    question: 'How can I contact Andrew?',
    answer:
      'Email Andrew at xiongandrew02@gmail.com or connect with him on LinkedIn at linkedin.com/in/andrew-xiong02. His code is available at github.com/andryuxiong.',
  },
];

function AskAndrew() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const panelBg = useColorModeValue('white', 'gray.900');
  const selectedBg = useColorModeValue('black', 'white');
  const selectedColor = useColorModeValue('white', 'black');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const mutedColor = useColorModeValue('gray.600', 'gray.300');
  const hoverBg = useColorModeValue('gray.100', 'gray.800');
  const selected = questions[selectedIndex];

  return (
    <Box minH="100vh" pt="100px" pb={16}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={3}>
              Ask Andrew
            </Heading>
            <Text color={mutedColor} maxW="650px" mx="auto">
              Quick, verified answers for recruiters and visitors. Choose a question to learn
              about Andrew's experience, projects, skills, and job search.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <VStack align="stretch" spacing={3}>
              {questions.map((item, index) => (
                <Button
                  key={item.question}
                  height="auto"
                  minH="52px"
                  py={3}
                  px={4}
                  justifyContent="flex-start"
                  textAlign="left"
                  whiteSpace="normal"
                  variant={selectedIndex === index ? 'solid' : 'outline'}
                  bg={selectedIndex === index ? selectedBg : 'transparent'}
                  color={selectedIndex === index ? selectedColor : 'inherit'}
                  borderColor={borderColor}
                  onClick={() => setSelectedIndex(index)}
                  _hover={{
                    bg: selectedIndex === index ? selectedBg : hoverBg,
                  }}
                >
                  {item.question}
                </Button>
              ))}
            </VStack>

            <Box
              bg={panelBg}
              border="1px solid"
              borderColor={borderColor}
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              boxShadow="lg"
              minH="300px"
            >
              <Text
                fontSize="xs"
                fontWeight="bold"
                letterSpacing="widest"
                textTransform="uppercase"
                color={mutedColor}
                mb={3}
              >
                Answer
              </Text>
              <Heading as="h2" size="lg" mb={5}>
                {selected.question}
              </Heading>
              <Text fontSize="lg" lineHeight="1.8">
                {selected.answer}
              </Text>
            </Box>
          </SimpleGrid>

          <Text fontSize="sm" textAlign="center" color={mutedColor}>
            These answers are curated from Andrew's current resume and project history.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

export default AskAndrew;
