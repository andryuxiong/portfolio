import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AskAndrew from './pages/AskAndrew';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/ask-andrew" element={<AskAndrew />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
