import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
      <p style={{ margin: 0 }}>&copy; 2026 Love Yadav</p>
      <p style={{ margin: 0 }}><a href="mailto:loveyadav2538@gmail.com" style={{ color: 'var(--text-muted)' }}>loveyadav2538@gmail.com</a> · built with React & Vite</p>
    </footer>
  );
};

export default Footer;
