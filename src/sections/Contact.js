import { useState, useRef } from 'react';
import { Box, Heading, Text, Container, VStack, Input, Textarea, Button, FormControl, FormLabel, useColorModeValue, Alert, AlertIcon } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const accentColor = useColorModeValue('minimal.accent', 'minimal.secondary.dark');
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardBorder = useColorModeValue('gray.200', 'gray.700');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_vtzacfh', // Service ID
      'template_ljpel2d', // Template ID
      form.current,
      'Dd82qJjPiZs5G-suX' // Public Key
    ).then(
      (result) => {
        setSubmitted(true);
      },
      (error) => {
        alert('There was an error sending your message. Please try again later.');
      }
    );
    e.target.reset();
  };

  return (
    <>
      <style>
        {`
          @keyframes wave {
            0% { transform: rotate(0deg);}
            10% { transform: rotate(14deg);}
            20% { transform: rotate(-8deg);}
            30% { transform: rotate(14deg);}
            40% { transform: rotate(-4deg);}
            50% { transform: rotate(10deg);}
            60% { transform: rotate(0deg);}
            100% { transform: rotate(0deg);}
          }
        `}
      </style>
      <Box id="contact" py={16} bg="transparent">
        <Container maxW="container.sm">
          <VStack align="start" spacing={6} bg={cardBg} borderRadius="xl" boxShadow="lg" border="1px solid" borderColor={cardBorder} p={8}>
            <Heading
              as="h2"
              size="lg"
              borderBottom="2px solid"
              borderColor={accentColor}
              pb={1}
              fontWeight="semibold"
              mb={2}
            >
              Contact{' '}
              <Box as="span" role="img" aria-label="waving hand" display="inline-block" style={{ animation: 'wave 1.5s infinite' }}>
                👋
              </Box>
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color={useColorModeValue('gray.700', 'gray.200')}>
              I'm always open to new opportunities, collaborations, or just a friendly chat! Fill out the form below and I'll get back to you soon. Even if you just want to say hi, I'd love to connect.
            </Text>
            {submitted ? (
              <Alert status="success" borderRadius="md">
                <AlertIcon />
                Thank you for reaching out! I appreciate your message and will get back to you as soon as I can. Have a wonderful day!
              </Alert>
            ) : (
              <form ref={form} style={{ width: '100%' }} onSubmit={sendEmail}>
                <VStack spacing={4} align="stretch">
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input name="name" placeholder="Your name" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" name="email" placeholder="Your email" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea name="message" placeholder="Your message" rows={5} />
                  </FormControl>
                  <Button type="submit" bg={accentColor} color="white" _hover={{ bg: accentColor, opacity: 0.9 }}>
                    Let's Connect!
                  </Button>
                </VStack>
              </form>
            )}
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default Contact;