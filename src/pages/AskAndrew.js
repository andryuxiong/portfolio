import { useMemo, useState } from 'react';
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Spinner,
  Text,
  Textarea,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from '@chakra-ui/react';

const suggestions = [
  'What did Andrew build during his internship?',
  'Tell me about the semiconductor timing workbench.',
  'What is Andrew strongest at technically?',
  'What kind of role is Andrew looking for?',
  'How can I contact Andrew?',
];

const initialMessage = {
  role: 'assistant',
  content:
    "Hi, I'm Andrew's portfolio assistant. Ask me about his experience, projects, technical skills, education, or current job search.",
};

function AskAndrew() {
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const panelBg = useColorModeValue('white', 'gray.900');
  const userBg = useColorModeValue('black', 'white');
  const userColor = useColorModeValue('white', 'black');
  const assistantBg = useColorModeValue('gray.100', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const mutedColor = useColorModeValue('gray.600', 'gray.300');

  const conversation = useMemo(
    () => messages.filter((message) => message !== initialMessage).slice(-10),
    [messages]
  );

  async function submitQuestion(question) {
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    const nextMessages = [...conversation, { role: 'user', content: trimmed }];
    setMessages((current) => [...current, { role: 'user', content: trimmed }]);
    setInput('');
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || 'The assistant is unavailable right now.');
      }

      setMessages((current) => [
        ...current,
        { role: 'assistant', content: payload.message },
      ]);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    submitQuestion(input);
  }

  return (
    <Box minH="100vh" pt="100px" pb={16}>
      <Container maxW="container.md">
        <VStack spacing={6} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={3}>
              Ask Andrew
            </Heading>
            <Text color={mutedColor}>
              A recruiter-focused AI assistant grounded in Andrew's current resume and project history.
            </Text>
          </Box>

          <Wrap justify="center">
            {suggestions.map((suggestion) => (
              <WrapItem key={suggestion}>
                <Button
                  size="sm"
                  variant="outline"
                  borderRadius="full"
                  onClick={() => submitQuestion(suggestion)}
                  isDisabled={loading}
                >
                  {suggestion}
                </Button>
              </WrapItem>
            ))}
          </Wrap>

          <VStack
            align="stretch"
            spacing={4}
            bg={panelBg}
            border="1px solid"
            borderColor={borderColor}
            borderRadius="2xl"
            p={{ base: 4, md: 6 }}
            minH="430px"
            boxShadow="lg"
          >
            {messages.map((message, index) => (
              <Flex
                key={`${message.role}-${index}`}
                justify={message.role === 'user' ? 'flex-end' : 'flex-start'}
              >
                <Box
                  maxW="85%"
                  bg={message.role === 'user' ? userBg : assistantBg}
                  color={message.role === 'user' ? userColor : 'inherit'}
                  px={4}
                  py={3}
                  borderRadius="xl"
                  whiteSpace="pre-wrap"
                >
                  <Text fontSize="sm" fontWeight="bold" mb={1}>
                    {message.role === 'user' ? 'You' : 'Andrew AI'}
                  </Text>
                  <Text>{message.content}</Text>
                </Box>
              </Flex>
            ))}

            {loading && (
              <HStack color={mutedColor}>
                <Spinner size="sm" />
                <Text>Thinking...</Text>
              </HStack>
            )}
          </VStack>

          {error && (
            <Alert status="error" borderRadius="lg">
              <AlertIcon />
              {error}
            </Alert>
          )}

          <Box as="form" onSubmit={handleSubmit}>
            <VStack align="stretch">
              <Textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about Andrew's experience, projects, or skills..."
                maxLength={800}
                resize="vertical"
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault();
                    handleSubmit(event);
                  }
                }}
              />
              <HStack justify="space-between">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setMessages([initialMessage]);
                    setError('');
                  }}
                >
                  Clear
                </Button>
                <Button
                  type="submit"
                  colorScheme="blackAlpha"
                  isLoading={loading}
                  isDisabled={!input.trim()}
                >
                  Send
                </Button>
              </HStack>
            </VStack>
          </Box>

          <Text fontSize="xs" textAlign="center" color="gray.500">
            AI-generated answers may be imperfect. Use the resume and project links for authoritative details.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

export default AskAndrew;
