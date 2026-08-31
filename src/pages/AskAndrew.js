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
      'At Trusted Semiconductor Solutions, Andrew built internal RAG and graph-data workflows for semiconductor documents, preprocessing and semantic-tagging pipelines for Liberty files, and React/FastAPI applications that supported document extraction, local Mixtral responses, and editable technical-marketing content.',
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
    question: 'What did Andrew build with Supabase?',
    answer:
      'Around is a React Native and Expo social-planning prototype. Andrew designed Supabase Auth, PostgreSQL/PostGIS, Row-Level Security, Realtime, and Storage workflows for circles, invitations, plans, voting, chat, availability, privacy, and location sharing, including transactional membership lifecycle functions.',
  },
  {
    question: 'What is Andrew strongest at technically?',
    answer:
      'Andrew is strongest at connecting frontend, backend, data, and AI components into practical applications. His recent work emphasizes React and TypeScript interfaces, Python/FastAPI services, SQL data modeling, retrieval and evaluation pipelines, provenance, and defensive handling of uncertain or incomplete data.',
  },
  {
    question: 'What kind of role is Andrew looking for?',
    answer:
      'Andrew is seeking new-grad software engineering opportunities, particularly full-stack, backend, and AI application roles where he can build useful products and work across multiple parts of a system.',
  },
  {
    question: "What is Andrew's education?",
    answer:
      "Andrew earned a Bachelor of Science in Computer Science from Metropolitan State University in August 2026 with a 3.54 GPA. He also earned an Associate of Science in Computer Science from Century College in May 2024 and made the Dean's List.",
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
