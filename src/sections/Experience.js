import {
    Box,
    Heading,
    Text,
    Container,
    VStack,
    HStack,
    Image,
  useColorModeValue,
  Flex,
  Badge,
  } from '@chakra-ui/react';
  import { motion } from 'framer-motion';
  
  const MotionBox = motion(Box);
  
  const experiences = [
    {
      title: 'Target',
      role: 'Fulfillment Team Member',
      duration: 'October 2020 – August 2022',
      details: [
        'Efficiently processed and fulfilled a high volume of online orders during the peak of COVID-19, ensuring timely and accurate delivery of products to customers.',
        'Prioritized customer satisfaction by adhering to strict timelines and quality standards, helping the company meet increased demand and ensuring a seamless shopping experience.',
        'Worked collaboratively with team members and adapted to rapidly changing circumstances, including evolving safety protocols and increased workload during the pandemic.',
        'What I learned: Developed strong teamwork, adaptability, and time management skills in a fast-paced environment.'
      ]
    },
    {
      title: 'Preferred Health Care and Social Services, INC',
      role: 'Personal Care Assistant',
      duration: 'February 2023 – March 2024',
      details: [
        'Provided day-to-day care for children with autism, including meal preparation, hygiene support, emotional guidance, and structured recreational activities.',
        "Maintained a clean and organized environment, ensuring safety and consistency aligned with each child's care plan.",
        'Followed specific behavioral strategies and communication protocols tailored to individual needs.',
        'Demonstrated patience, adaptability, and attention to detail in a highly sensitive and responsibility-driven role.',
        'What I learned: Strengthened empathy, communication, and problem-solving skills while supporting individuals with diverse needs.'
      ]
    }
  ];
  
    
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.3,
        ease: 'easeOut',
      },
    }),
  };
  
  const Experience = () => {
  const textColor = useColorModeValue('minimal.text.light', 'minimal.text.dark');
  const accentColor = useColorModeValue('minimal.accent', 'minimal.secondary.dark');
  const cardBg = useColorModeValue('white', 'gray.900');
  const cardBorder = useColorModeValue('gray.200', 'gray.700');

    return (
      <Box id="experience" py={20}>
        <Container maxW="container.md">
          <Heading
            as="h2"
            size="lg"
            borderBottom="2px solid"
            borderColor={accentColor}
            pb={1}
            fontWeight="semibold"
            mb={10}
          >
          Other Work Experience
          </Heading>

        <VStack align="start" spacing={10}>
          {experiences.map((exp, i) => (
            <MotionBox
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              variants={itemVariants}
              w="100%"
              position="relative"
            >
              <Flex
                direction={{ base: 'column', md: 'row' }}
                gap={6}
                align={{ base: 'start', md: 'center' }}
                mb={4}
              >
                <Box flex="1">
                  <Heading as="h4" size="md" color={accentColor} mb={1}>
                    {exp.title}
          </Heading>
                  <Text fontWeight="semibold" fontSize="lg" mb={1}>
                    {exp.role}
                  </Text>
                  <Badge colorScheme="gray" variant="subtle" px={2} py={1} borderRadius="md">
                    {exp.duration}
                  </Badge>
                </Box>
              </Flex>
              
              <Box
                pl={{ base: 0, md: 4 }}
                borderLeft={{ base: 'none', md: '2px solid' }}
                borderColor={accentColor}
              >
                <VStack align="start" spacing={3}>
                  {exp.details.map((d, j) => (
                    <Flex key={j} gap={3} align="start">
                      <Box
                        w="2px"
                        h="2px"
                        borderRadius="full"
                        bg={accentColor}
                        mt={2}
                        flexShrink={0}
                      />
                      <Text color={textColor}>{d}</Text>
                    </Flex>
                  ))}
                </VStack>
              </Box>
            </MotionBox>
            ))}
          </VStack>
        </Container>
      </Box>
    );
  };
  
  export default Experience;