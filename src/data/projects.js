import medicareLogo from '../assets/projects/medicare-logo.png';
import portfolioScreenshot from '../assets/projects/portfolio-screenshot.png';
import labubuBotImg from '../assets/projects/labubu-bot.png';
import marketseerImg from '../assets/projects/marketseer.png';
import trustedLogo from '../assets/projects/trusted-logo.png';

const projects = [
  {
    title: 'Semiconductor Timing Intelligence Workbench',
    description:
      'An internal engineering workbench for parsing, querying, and comparing Liberty timing libraries. It exposes timing, power, PVT corner, and source-provenance data through deterministic FastAPI services and a React interface.',
    image: trustedLogo,
    techStack: ['Python', 'FastAPI', 'React', 'Pydantic', 'Pytest', 'Liberty'],
    date: '2025',
  },
  {
    title: 'LLM DataBriefPilot',
    description:
      'A local-first desktop application built for a semiconductor marketing team. It transforms technical datasheets into structured marketing briefs, supports document-grounded chat, extracts diagrams, and packages the workflow as a Windows application.',
    image: trustedLogo,
    techStack: ['Electron', 'React', 'TypeScript', 'FastAPI', 'llama.cpp', 'PyMuPDF', 'OpenCV'],
    date: '2025',
  },
  {
    title: 'MarketSeer Stock Predictor',
    description:
      'A full-stack market analysis platform with real-time stock data, portfolio simulation, interactive visualizations, and LSTM-based price forecasting. The API layer uses caching to manage third-party rate limits.',
    github: 'https://github.com/andryuxiong/marketseer',
    demo: 'https://market-seer.vercel.app/',
    image: marketseerImg,
    techStack: ['React', 'Python', 'TensorFlow', 'Keras', 'Plotly.js', 'yFinance'],
    date: '2025',
  },
  {
    title: 'AI Medicare Assistant',
    description:
      'A full-stack virtual health assistant that accepts voice or text symptom descriptions and returns structured, conversational guidance through a Java and Spring Boot backend.',
    github: 'https://github.com/andryuxiong/medicare-ai',
    demo: 'https://medicare-ai-three.vercel.app/',
    image: medicareLogo,
    techStack: ['React', 'Java', 'Spring Boot', 'OpenAI API', 'Spring WebFlux'],
    date: '2024',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A responsive developer portfolio with accessible light and dark themes, animated project presentation, a downloadable resume, and a personalized AI assistant.',
    github: 'https://github.com/andryuxiong/portfolio',
    demo: 'https://iamandrew.dev/',
    image: portfolioScreenshot,
    techStack: ['React', 'Chakra UI', 'Framer Motion', 'Vercel'],
    date: '2026',
  },
  {
    title: 'Labubu Bot',
    description:
      'A Python and Selenium automation project for monitoring limited-edition product availability, sending Discord notifications, and handling checkout workflows with resilient error recovery.',
    github: 'https://github.com/andryuxiong/labububot',
    image: labubuBotImg,
    techStack: ['Python', 'Selenium', 'Discord Webhooks', 'BeautifulSoup'],
    date: '2025',
  },
];

export const featuredProjects = projects.slice(0, 4);
export default projects;
