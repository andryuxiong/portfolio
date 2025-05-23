import { Box, Heading, SimpleGrid, VStack, Text, HStack, Center } from '@chakra-ui/react';
import { FaPython, FaJava, FaReact, FaGitAlt, FaDatabase, FaHtml5 } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiSpring, SiNextdotjs, SiChakraui } from 'react-icons/si';

const skills = [
  {
    group: 'Frontend Development',
    items: [
      { name: 'React', icon: FaReact, level: 'Intermediate' },
      { name: 'Next.js', icon: SiNextdotjs, level: 'Basic' },
      { name: 'HTML/CSS', icon: FaHtml5, level: 'Intermediate' },
      { name: 'JavaScript', icon: FaReact, level: 'Intermediate' },
      { name: 'Git', icon: FaGitAlt, level: 'Intermediate' },
      { name: 'Chakra UI', icon: SiChakraui, level: 'Intermediate' },
    ],
  },
  {
    group: 'Backend Development',
    items: [
      { name: 'Java', icon: FaJava, level: 'Intermediate' },
      { name: 'Python', icon: FaPython, level: 'Intermediate' },
      { name: 'C++', icon: SiCplusplus, level: 'Basic' },
      { name: 'Spring Boot', icon: SiSpring, level: 'Intermediate' },
      { name: 'MySQL', icon: SiMysql, level: 'Basic' },
      { name: 'SQL', icon: FaDatabase, level: 'Basic' },
    ],
  },
];

const Skills = () => (
  <Center mt={12}>
    <Box w={{ base: '100%', md: '80%' }}>
      <Heading as="h3" size="md" mb={4} color="ocean.accent" textAlign="center">
        Skills
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {skills.map((group) => (
          <Box
            key={group.group}
            borderWidth={2}
            borderRadius="lg"
            borderColor="ocean.accent"
            bg="ocean.secondary.light"
            p={5}
            boxShadow="md"
          >
            <Text
              fontWeight="bold"
              fontSize="lg"
              mb={4}
              color="ocean.accent"
              textAlign="center"
            >
              {group.group}
            </Text>
            <SimpleGrid columns={2} spacing={3} justifyItems="center">
              {group.items.map(({ name, icon: Icon, level }) => (
                <VStack key={name} spacing={1} align="center" justify="center" w="100%">
                  <Icon size={28} color="#219EBC" />
                  <Text>{name}</Text>
                  <Text fontSize="xs" color="gray.600">{level}</Text>
                </VStack>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  </Center>
);

export default Skills; 