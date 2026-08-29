import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Love Yadav</span></h1>
        <h2>B.Tech Computer Science, IIIT Lucknow / Competitive Programmer / Full-Stack & ML Developer</h2>
        
        <div className="social-links" style={{ justifyContent: 'center', marginTop: '30px', flexWrap: 'wrap' }}>
          <a href="mailto:loveyadav2538@gmail.com" className="social-icon">email</a>
          <a href="tel:+919258974898" className="social-icon">phone</a>
          <a href="https://github.com/loveyadav1015" target="_blank" rel="noopener noreferrer" className="social-icon">github</a>
          <a href="https://www.linkedin.com/in/love-yadav-b13b46380/" target="_blank" rel="noopener noreferrer" className="social-icon">linkedin</a>
          <a href="https://codeforces.com/profile/love_044" target="_blank" rel="noopener noreferrer" className="social-icon">codeforces</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
