import React from 'react';
import Hero from './components/Hero';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <main>
        <Hero />
        <Education />
        <Achievements />
        <Projects />
        <OpenSource />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
