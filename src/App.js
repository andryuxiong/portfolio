import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AskAndrew from './pages/AskAndrew';
import RouteFocus from './components/RouteFocus';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <NavBar />
      <RouteFocus />
      <main id="main-content" tabIndex={-1}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AskAndrew />} />
        <Route path="/ask-andrew" element={<AskAndrew />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
