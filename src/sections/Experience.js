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
        'Worked collaboratively with team members and adapted to rapidly changing circumstances, including evolving safety protocols and increased workload during the pandemic.'
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
        'Demonstrated patience, adaptability, and attention to detail in a highly sensitive and responsibility-driven role.'
      ]
    }
  ];
  
  const coursework = [
    {
      title: 'Security Risk Assessment – Fullsoft Cybersecurity Project Coursework',
      duration: 'Fall 2025 | Cybersecurity, Risk management, NIST SP 800-30',
      details: [
        'Conducted a risk assessment for a simulated business environment using industry-standard frameworks (NIST SP 800-30 and OCTAVE Allegro).',
        'Identified potential security threats and vulnerabilities across seven IT infrastructure domains, including User, LAN, and Remote Access.',
        'Co-authored a professional security report and presented findings to a mock executive audience, simulating real-world consulting experience.'
      ]
    },
    {
      title: 'Database Reporting System – ICS 311 Project Coursework',
      duration: 'Fall 2025 | Python, MySQL, SQL, ER Diagrams',
      details: [
        'Built a Python-based reporting tool to interact with a MySQL database, securely handling credentials and user input.',
        'Designed and normalized a relational schema for a digital bookstore system; wrote SQL queries to generate inventory and sales reports.',
        'Focused on data integrity, performance optimization, and real-world application of database principles.'
      ]
    },
    {
      title: 'Machine Learning Model Development – ICS 352 Coursework',
      duration: 'Spring 2025 | Scikit-learn, Python, Data Analysis',
      details: [
        'Designed, trained, and evaluated machine learning models (Decision Trees, k-NN, MLP) to predict survival outcomes and wine quality using real-world datasets.',
        'Applied end-to-end ML pipelines: performed data cleaning, normalization, feature selection (including PCA), and model tuning with cross-validation.'
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
  const textColor = useColorModeValue('ocean.text.light', 'ocean.text.dark');
  const accentColor = useColorModeValue('ocean.accent', 'ocean.secondary.light');
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardBorder = useColorModeValue('gray.200', 'gray.700');

    return (
      <Box id="experience" py={20}>
        <Container maxW="container.md">
          <Heading
            as="h2"
            size="lg"
            borderBottom="2px solid"
            borderColor="ocean.accent"
            pb={1}
            fontWeight="semibold"
            mb={10}
          >
          Relevant Coursework
          </Heading>
  
          <VStack align="start" spacing={8}>
          {coursework.map((course, i) => (
              <MotionBox
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                variants={itemVariants}
              w="100%"
              position="relative"
              _hover={{
                transform: 'translateY(-2px)',
                transition: 'all 0.2s ease-in-out'
              }}
            >
              <Box
                bg={cardBg}
                borderRadius="xl"
                boxShadow="lg"
                overflow="hidden"
                border="1px solid"
                borderColor={cardBorder}
              >
                <Box
                  bg={accentColor}
                  px={6}
                  py={4}
                  borderBottom="1px solid"
                  borderColor={cardBorder}
              >
                  <Heading as="h4" size="md" color="white">
                    {course.title}
                  </Heading>
                  <Text fontSize="sm" color="white" opacity={0.9} mt={1}>
                    {course.duration}
                  </Text>
                </Box>
                <Box p={6}>
                  <VStack align="start" spacing={3}>
                    {course.details.map((d, j) => (
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
              </Box>
              </MotionBox>
            ))}
          </VStack>

          <Heading
            as="h3"
            size="md"
            borderBottom="1px solid"
            borderColor="ocean.accent"
            pb={1}
            fontWeight="semibold"
            mt={12}
            mb={6}
          >
          Work Experience
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
                  <Badge colorScheme="blue" variant="subtle" px={2} py={1} borderRadius="md">
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
  