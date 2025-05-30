import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

import Header from './components/Header.jsx';
import SocialIcons from './pages/SocialIcons.jsx';

import CricketBettingStrategies from './pages/CricketBettingStrategies.jsx';
import FootballOdds from './pages/FootballOdds.jsx';

import ScrollToTop from './components/ScrollToTop.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cricket-betting-strategies" element={<CricketBettingStrategies />} /> 
          <Route path="/football-odds" element={<FootballOdds />} />
        </Routes>
          <SocialIcons /> {/* <- Always visible */}
      </div>
    </Router>
  );
}

export default App;

