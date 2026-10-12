import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const navItems = [
  { id: 'home', label: '.home' },
  { id: 'about', label: '.about' },
  { id: 'work', label: '.work' }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const triggers = [];

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top 45%',
        end: 'bottom 45%',
        onEnter: () => setActiveSection(item.id),
        onEnterBack: () => setActiveSection(item.id)
      });
      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      target.scrollIntoView({ behavior: 'auto' });
      setActiveSection(id);
      return;
    }

    gsap.to(window, {
      duration: 0.7,
      scrollTo: { y: target, offsetY: 30 },
      ease: 'power2.out',
      onComplete: () => setActiveSection(id)
    });
  };

  return (
    <header className="navbar-fixed" aria-label="Main Navigation">
      <nav className="navbar-container">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={(e) => handleNavClick(e, item.id)}
            className={`nav-pill-btn ${activeSection === item.id ? 'active' : ''}`}
            aria-current={activeSection === item.id ? 'page' : undefined}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
