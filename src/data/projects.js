import ragEvaluationImg from '../assets/projects/rag-evaluation.png';
import northstarImg from '../assets/projects/northstar.png';
import aroundImg from '../assets/projects/around.png';
import marketseerImg from '../assets/projects/marketseer.png';
import brewCafeImg from '../assets/projects/brew-cafe.png';

const projects = [
  {
    title: 'RAG Evaluation Platform',
    context: 'Capstone project',
    description:
      'A reproducible research workspace for comparing semantic and keyword retrieval, testing generated answers, and preserving the evidence behind every evaluation run.',
    highlights: [
      'Eight provider-free metrics plus Gemini judging, RAGAS, and human review',
      'Immutable question, context, model, evaluator, token, and cost snapshots',
    ],
    github: 'https://github.com/sjasthi/llm-rag-evals',
    image: ragEvaluationImg,
    techStack: ['PHP', 'Python', 'MySQL', 'Chroma', 'MiniLM', 'Gemini'],
    date: '2026',
  },
  {
    title: 'Northstar Commerce Intelligence',
    context: 'Personal project',
    description:
      'A full-stack research platform that turns public store and product observations into traceable intelligence reports, investigations, comparisons, and product-economics workflows.',
    highlights: [
      'SSRF-aware crawler with DNS, redirect, robots, size, and throttle controls',
      'Versioned range estimators with provenance and insufficient-data gates',
    ],
    image: northstarImg,
    techStack: ['React', 'TypeScript', 'FastAPI', 'SQLAlchemy', 'Alembic', 'SQLite'],
    date: '2026',
  },
  {
    title: 'Around Social Availability App',
    context: 'Personal prototype',
    description:
      'A mobile coordination app for sharing availability privately, organizing circles, and turning group intent into plans, votes, chat, calendar, and location-aware workflows.',
    highlights: [
      'Postgres/PostGIS with Auth, RLS, Realtime, Storage, and privacy controls',
      'Transactional circle lifecycle functions and native-device adapters',
    ],
    github: 'https://github.com/andryuxiong/around-app',
    image: aroundImg,
    imageFit: 'contain',
    techStack: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'PostgreSQL', 'PostGIS'],
    date: '2026',
  },
  {
    title: 'Capitol Pulse',
    context: 'Personal research tool',
    description:
      'A local research application for collecting House financial disclosures, reviewing uncertain parses, and studying lag-aware signals through paper backtests.',
    highlights: [
      'PDF ingestion, ticker verification, confidence scoring, and review queues',
      'SQLite outcomes with SPY comparison, slippage, drawdown, and alerts',
    ],
    techStack: ['Python', 'Streamlit', 'SQLite', 'yfinance', 'APScheduler'],
    date: '2026',
  },
  {
    title: 'MarketSeer',
    context: 'Machine-learning project',
    description:
      'A React and FastAPI market dashboard combining quote, history, news, sentiment, portfolio, and experimental price-forecasting workflows.',
    highlights: [
      'Saved per-symbol stacked Keras LSTM models and preprocessing artifacts',
      'Finnhub, yfinance, and Alpha Vantage integrations with fallback handling',
    ],
    github: 'https://github.com/andryuxiong/MarketSeer',
    demo: 'https://market-seer.vercel.app/',
    image: marketseerImg,
    techStack: ['React', 'TypeScript', 'FastAPI', 'TensorFlow', 'Keras', 'yfinance'],
    date: '2026',
  },
  {
    title: 'Brew Cafe System',
    context: 'Team course project',
    description:
      'A JavaFX cafe-management application spanning customer ordering, beverage customization, barista fulfillment, manager controls, inventory, and local persistence.',
    highlights: [
      'Observer and Factory Method patterns across role-based workflows',
      'Jackson JSON persistence and a packaged Maven runnable JAR',
    ],
    github: 'https://github.com/axxiong002/brew-cafe-system',
    image: brewCafeImg,
    imageFit: 'contain',
    techStack: ['Java 21', 'JavaFX', 'Maven', 'Jackson', 'JSON'],
    date: '2026',
  },
];

export const featuredProjects = projects.slice(0, 3);
export default projects;
