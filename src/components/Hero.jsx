import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import DotField from './DotField';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const { identity } = portfolioData;
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, scale: 0.92, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1.1, delay: 0.2 }
      ).fromTo(
        taglineRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <DotField />

      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>
          {identity.handle}
        </h1>

        {identity.tagline && (
          <p className="hero-tagline" ref={taglineRef}>
            {identity.tagline}
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;
