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
    question: 'What did you build during your internship?',
    answer:
      'At Trusted Semiconductor Solutions, I built internal RAG and graph-data workflows for semiconductor documents, preprocessing and semantic-tagging pipelines for Liberty files, and React/FastAPI applications that supported document extraction, local Mixtral responses, and editable technical-marketing content.',
  },
  {
    question: 'What is the RAG Evaluation Platform?',
    answer:
      'It is Andrew\'s ICS 499 capstone: a PHP, Python, MySQL, and Chroma research platform that compares semantic retrieval with a keyword baseline. It supports eight provider-free metrics, Gemini judging, RAGAS, human review, and saved evidence for questions, contexts, model settings, evaluator attempts, tokens, and costs.',
  },
  {
    question: 'What makes Northstar technically interesting?',
    answer:
      'Northstar combines a React/TypeScript interface, FastAPI services, SQLAlchemy, and Alembic with an SSRF-aware public-web crawler. Its estimators return low, central, and high planning ranges with explicit assumptions, provenance, confidence labels, and insufficient-data states instead of presenting guesses as facts.',
  },
  {
    question: 'What did you build with Supabase?',
    answer:
      'Around is my React Native and Expo social-planning prototype. I designed Supabase Auth, PostgreSQL/PostGIS, Row-Level Security, Realtime, and Storage workflows for circles, invitations, plans, voting, chat, availability, privacy, and location sharing, including transactional membership lifecycle functions.',
  },
  {
    question: 'What are you strongest at technically?',
    answer:
      'I am strongest at connecting frontend, backend, data, and AI components into practical applications. My recent work emphasizes React and TypeScript interfaces, Python/FastAPI services, SQL data modeling, retrieval and evaluation pipelines, provenance, and defensive handling of uncertain or incomplete data.',
  },
  {
    question: 'What kind of role are you looking for?',
    answer:
      'I am seeking new-grad software engineering opportunities, particularly full-stack, backend, and AI software roles where I can build useful products and work across multiple parts of a system.',
  },
  {
    question: 'What is your education?',
    answer:
      "I earned a Bachelor of Science in Computer Science from Metropolitan State University in August 2026 with a 3.54 GPA. I also earned an Associate of Science in Computer Science from Century College in May 2024 and made the Dean's List.",
  },
  {
    question: 'How can I contact you?',
    answer:
      'Email me at xiongandrew02@gmail.com or connect with me on LinkedIn at linkedin.com/in/andrew-xiong02. My code is available at github.com/andryuxiong.',
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
    <Box minH="100vh" pt={{ base: '120px', md: '145px' }} pb={16} position="relative" overflow="hidden">
      <Box
        position="absolute"
        inset={0}
        opacity={useColorModeValue(0.055, 0.08)}
        backgroundImage="radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)"
        backgroundSize="34px 34px"
        pointerEvents="none"
      />
      <Container maxW="container.lg">
        <VStack spacing={{ base: 10, md: 12 }} align="stretch" position="relative">
          <Box maxW="720px">
            <Text
              color={mutedColor}
              fontSize="sm"
              fontWeight="600"
              letterSpacing="0.08em"
              textTransform="uppercase"
              mb={5}
            >
              About me
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight="1"
              letterSpacing="-0.06em"
              mb={6}
            >
              A few quick answers.
            </Heading>
            <Text color={mutedColor} maxW="650px" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.8">
              More context about my experience, projects, technical interests, education,
              and the kind of work I am looking for.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <VStack align="stretch" spacing={3}>
              {questions.map((item, index) => (
                <Box key={item.question}>
                  <Button
                    width="100%"
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
                    aria-expanded={selectedIndex === index}
                    _hover={{
                      bg: selectedIndex === index ? selectedBg : hoverBg,
                    }}
                  >
                    {item.question}
                  </Button>

                  {selectedIndex === index && (
                    <Box
                      display={{ base: 'block', md: 'none' }}
                      bg={panelBg}
                      border="1px solid"
                      borderColor={borderColor}
                      borderRadius="xl"
                      p={5}
                      mt={3}
                      boxShadow="sm"
                    >
                      <Text lineHeight="1.8">{item.answer}</Text>
                    </Box>
                  )}
                </Box>
              ))}
            </VStack>

            <Box
              display={{ base: 'none', md: 'block' }}
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
            Based on my current résumé and project work.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

export default AskAndrew;
