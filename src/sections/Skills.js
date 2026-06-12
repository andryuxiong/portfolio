import { Box, Heading, SimpleGrid, VStack, Text, Container, useColorModeValue } from '@chakra-ui/react';
import { FaPython, FaJava, FaReact, FaGitAlt, FaDatabase, FaHtml5, FaRobot } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiSpring, SiNextdotjs, SiFastapi, SiTensorflow } from 'react-icons/si';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const skills = [
  {
    group: 'Frontend Development',
    items: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'HTML/CSS', icon: FaHtml5 },
      { name: 'JavaScript/TS', icon: FaReact },
      { name: 'Git/GitHub', icon: FaGitAlt },
      { name: 'REST APIs', icon: FaDatabase },
    ],
  },
  {
    group: 'Backend Development',
    items: [
      { name: 'Python', icon: FaPython },
      { name: 'Java', icon: FaJava },
      { name: 'C++', icon: SiCplusplus },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Spring Boot', icon: SiSpring },
      { name: 'SQL/MySQL', icon: SiMysql },
    ],
  },
  {
    group: 'AI and Data',
    items: [
      { name: 'RAG', icon: FaRobot },
      { name: 'LLM Inference', icon: FaRobot },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Pandas/NumPy', icon: FaPython },
      { name: 'Pytest', icon: FaPython },
      { name: 'Data Pipelines', icon: FaDatabase },
    ],
  },
];

const SkillItem = ({ name, icon: Icon, bgColor, hoverBgColor, iconColor }) => (
  <VStack
    spacing={2}
    p={3}
    borderRadius="lg"
    bg={bgColor}
    _hover={{
      bg: hoverBgColor,
      transform: 'scale(1.05)',
      transition: 'all 0.2s ease-in-out'
    }}
  >
    <Icon size={24} color={iconColor} />
    <Text fontWeight="medium" fontSize="sm">
      {name}
    </Text>
  </VStack>
);

const Skills = () => {
  const accentColor = useColorModeValue('minimal.accent', 'minimal.secondary.dark');
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardBorder = useColorModeValue('gray.200', 'gray.700');
  const skillBg = useColorModeValue('gray.50', 'gray.700');
  const skillHoverBg = useColorModeValue('gray.100', 'gray.600');
  const iconColor = useColorModeValue('minimal.accent', 'minimal.text.dark');

  return (
    <Box py={12} id="skills">
      <Container maxW="container.md">
        <Heading
          as="h2"
          size="lg"
          textAlign="center"
          mb={8}
          color={accentColor}
          position="relative"
          _after={{
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60px',
            height: '4px',
            bg: accentColor,
            borderRadius: 'full',
          }}
        >
        Skills
      </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="100%">
          {skills.map((group, groupIndex) => (
            <MotionBox
            key={group.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                bg={cardBg}
                borderRadius="xl"
                p={6}
                boxShadow="lg"
                border="1px solid"
                borderColor={cardBorder}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'xl',
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                <Heading
                  as="h3"
                  size="md"
                  mb={6}
                  color={accentColor}
              textAlign="center"
                  fontWeight="semibold"
            >
              {group.group}
                </Heading>
                <SimpleGrid columns={2} spacing={4}>
                  {group.items.map((skill, index) => (
                    <MotionBox
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <SkillItem
                        {...skill}
                        bgColor={skillBg}
                        hoverBgColor={skillHoverBg}
                        iconColor={iconColor}
                      />
                    </MotionBox>
              ))}
            </SimpleGrid>
          </Box>
            </MotionBox>
        ))}
      </SimpleGrid>
      </Container>
    </Box>
);
};

export default Skills;
