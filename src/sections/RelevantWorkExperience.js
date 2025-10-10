import { Box, Heading, Text, Container, Image, HStack, Badge, useBreakpointValue } from '@chakra-ui/react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import trustedLogo from '../assets/projects/trusted-logo.png';

const MotionBox = motion(Box);

const RelevantWorkExperience = () => {
  const accentColor = '#219EBC'; 

  // Responsive icon size and position
  const iconSize = useBreakpointValue({ base: '80px', md: '85px' });
  const iconLeft = useBreakpointValue({ base: '-32px', md: '-35px' });

  return (
    <MotionBox 
      id="relevant-work-experience" 
      py={{ base: 8, md: 10 }} 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <style>
        {`
          .custom-timeline-element .vertical-timeline-element-content {
            margin-top: 30px !important;
            margin-bottom: 0 !important;
          }
          @media (max-width: 600px) {
            .custom-timeline-element .vertical-timeline-element-content {
              margin-top: 20px !important;
              margin-bottom: 24px !important;
              padding-left: 10px !important;
              padding-right: 10px !important;
            }
            .vertical-timeline::before {
              left: 40px !important;
            }
          }
          .vertical-timeline::before {
            left: 7px !important;
          }
            .vertical-timeline-element-content-arrow {
            top: 32px !important;
          }
        `}
      </style>
      <Container maxW="container.md" px={{ base: 2, md: 6 }}>
        <Heading
          as="h2"
          size="lg"
          borderBottom="2px solid"
          borderColor={accentColor}
          pb={1}
          fontWeight="semibold"
          mb={8}
        >
          Relevant Work Experience
        </Heading>
        <Box pl={{ base: 8, md: 0 }}>
          <VerticalTimeline
            lineColor={accentColor}
            layout={'1-column-left'}
            animate={true}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work custom-timeline-element"
              contentStyle={{ 
                background: accentColor, 
                color: '#fff',
                padding: '24px 24px',
                paddingLeft: '24px',
                paddingRight: '24px',
              }}
              contentArrowStyle={{ 
                borderRight: `7px solid ${accentColor}`
              }}
              date="June 2025 – August 2025 | Minneapolis, MN"
              iconStyle={{
                background: '#fff',
                color: '#fff',
                width: iconSize,
                height: iconSize,
                left: iconLeft,
              }}
              icon={
                <MotionBox
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  boxShadow="0 4px 12px rgba(33, 158, 188, 0.3)"
                  borderRadius="50%"
                >
                  <Image
                    padding="1px"
                    paddingLeft="1px"
                    borderRadius="50%"
                    src={trustedLogo}
                    alt="Trusted Semiconductor Solutions logo"
                    width={iconSize}
                    height={iconSize}
                    objectFit="contain"
                  />
                </MotionBox>
              }
            >
              <Box mb={{ base: 4, md: 0 }}>
                <Heading as="h3" size="md" mb={1}>
                  Trusted Semiconductor Solutions
                </Heading>
                <Heading 
                  as={'h4'} 
                  size={'lg'} 
                  mb={2}
                  fontWeight="bold"
                  color="white"
                  textShadow="0 1px 2px rgba(0,0,0,0.3)"
                  letterSpacing="tight"
                >
                  AI Software Engineering Intern
                </Heading>
                
                <HStack spacing={3} mb={2} mt={0} flexWrap="wrap">
                </HStack>
                
                <HStack spacing={2} flexWrap="wrap" mb={2}>
                  {[
                    'Python', 'AI/ML', 'NLP', 'LLMs', 'Data Pipelines'
                  ].map((tech, idx) => (
                    <MotionBox
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <Badge 
                        colorScheme="teal" 
                        variant="solid" 
                        fontSize="0.85em"
                        px={2}
                        py={1}
                        borderRadius="md"
                        _hover={{
                          transform: 'scale(1.05)',
                          transition: 'all 0.2s'
                        }}
                      >
                        {tech}
                      </Badge>
                    </MotionBox>
                  ))}
                </HStack>
                
                <Text mb={3}>
                  🛠️ Engineered RAG and graph database solutions for real-time, complex Q&A on semiconductor datasheets and process designkits, boosting information retrieval accuracy by 90% and streamlining engineering workflows.
                </Text>
                <Text mb={3}>
                  🤖 Fine-tuned and benchmarked Large Language Models (LLMs) (LaMa, Qwen, Mixtral), optimizing token efficiency and inference speed for production use cases.
                </Text>
                <Text mb={3}>
                  ⚙️ Built automated data pipelines for document reprocessing and tagging, reducing manual workload and enabling efficient LLM ingestion.
                </Text>
                <Text mb={3}>
                  🗂️ Developed a domain-adapted LLM tool to extract and generate key data from Liberty (.lib) files, allowing engineers to query design specifications and critical information—reducing reliance on expensive EDA tools and accelerating chip design processes.
                </Text>
              </Box>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Box>
      </Container>
    </MotionBox>
  );
};

export default RelevantWorkExperience; 