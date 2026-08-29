import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="section-header">
        <h2>Education</h2>
      </div>
      <div className="about-container" style={{ display: 'block' }}>
        <div className="detail-item" style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <span className="detail-value" style={{ fontSize: '1.2rem', fontWeight: '600' }}>Indian Institute of Information Technology (IIIT), Lucknow</span>
            <span className="detail-label" style={{ color: 'var(--accent-1)' }}>Expected May 2029</span>
          </div>
          <p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>B.Tech in Computer Science · CGPA 8.8 / 10 · Lucknow, UP</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
