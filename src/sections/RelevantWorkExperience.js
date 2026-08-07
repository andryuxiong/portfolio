import { Box, Heading, Text, Container, Image, HStack, Badge, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import trustedLogo from '../assets/projects/trusted-logo.png';

const MotionBox = motion(Box);

const RelevantWorkExperience = () => {
  const accentColor = useColorModeValue('minimal.accent', 'minimal.secondary.dark'); 
  
  // Color values for consistent usage
  const timelineLineColor = useColorModeValue('#000000', '#ffffff');
  const contentBgColor = useColorModeValue('#ffffff', '#2d3748');
  const contentTextColor = useColorModeValue('#000000', '#ffffff');
  const contentBorderColor = useColorModeValue('#000000', '#ffffff');
  const badgeBgColor = useColorModeValue('#000000', '#ffffff');
  const badgeTextColor = useColorModeValue('#ffffff', '#000000');
  const dateTextColor = useColorModeValue('#000000', '#ffffff');

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
            lineColor={timelineLineColor}
            layout={'1-column-left'}
            animate={true}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work custom-timeline-element"
              contentStyle={{ 
                background: contentBgColor, 
                color: contentTextColor,
                border: `2px solid ${contentBorderColor}`,
                padding: '24px 24px',
                paddingLeft: '24px',
                paddingRight: '24px',
              }}
              contentArrowStyle={{ 
                borderRight: `7px solid ${contentBorderColor}`
              }}
              date="May 2025 - August 2025 | Minneapolis, MN"
              dateStyle={{
                color: dateTextColor,
                fontWeight: '600'
              }}
              iconStyle={{
                background: '#ffffff',
                color: '#000000',
                border: `2px solid ${contentBorderColor}`,
                width: iconSize,
                height: iconSize,
                left: iconLeft,
              }}
              icon={
                <MotionBox
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  boxShadow={useColorModeValue('0 4px 12px rgba(0, 0, 0, 0.1)', '0 4px 12px rgba(255, 255, 255, 0.1)')}
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
                <Heading as="h3" size="md" mb={1} color={contentTextColor}>
                  Trusted Semiconductor Solutions
                </Heading>
                <Heading 
                  as={'h4'} 
                  size={'lg'} 
                  mb={2}
                  fontWeight="bold"
                  color={contentTextColor}
                  letterSpacing="tight"
                >
                  AI Software Engineer Intern
                </Heading>
                
                <HStack spacing={3} mb={2} mt={0} flexWrap="wrap">
                </HStack>
                
                <HStack spacing={2} flexWrap="wrap" mb={2}>
                  {[
                    'Python', 'FastAPI', 'React', 'RAG', 'Graph Data', 'Local LLMs'
                  ].map((tech, idx) => (
                    <MotionBox
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <Badge 
                        bg={badgeBgColor}
                        color={badgeTextColor}
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
                
                <Text mb={3} color={contentTextColor}>
                  Engineered an internal RAG and graph-data system for querying semiconductor datasheets and process design kits, enabling document-grounded answers for engineering workflows.
                </Text>
                <Text mb={3} color={contentTextColor}>
                  Built preprocessing, chunking, and semantic-tagging pipelines for Liberty files so engineers could query design specifications through natural language.
                </Text>
                <Text mb={3} color={contentTextColor}>
                  Developed React and FastAPI applications that extracted text and images from technical documents, retrieved contextual chunks, streamed local Mixtral responses, and generated editable LaTeX, SVG, and PDF content.
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
