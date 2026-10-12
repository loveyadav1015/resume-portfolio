import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import SocialRail from './components/SocialRail';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

import './styles/tokens.css';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // ScrollTrigger batch reveals for bento cards
      ScrollTrigger.batch('.bento-card', {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.12,
              ease: 'power2.out',
              overwrite: 'auto'
            }
          );
        }
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="app-container" ref={appRef}>
      <Navbar />
      <SocialRail />

      <Hero />

      <main className="main-content">
        <About />

        <section id="work" className="work-section">
          <h2 className="section-title">Work &amp; Experience</h2>
          <div className="work-modules-container">
            <Projects />
            <OpenSource />
            <Achievements />
            <Education />
            <Skills />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
