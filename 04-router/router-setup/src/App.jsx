import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

export default function App() {
  return (
    <div>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

