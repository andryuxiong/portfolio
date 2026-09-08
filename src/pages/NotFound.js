import { Container, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container minH="70vh" pt="145px" pb={16}>
      <Heading as="h1" mb={5}>Page not found</Heading>
      <Text mb={6}>This page may have moved, or the address may be incorrect.</Text>
      <Button as={Link} to="/">Back to home</Button>
    </Container>
  );
}
