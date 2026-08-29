import React from 'react';

const OpenSource = () => {
  return (
    <section id="open-source" className="section-padding">
      <div className="section-header">
        <h2>Open Source Contributions</h2>
      </div>

      <div className="project-card" style={{ padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
          <h3 style={{ margin: 0, fontSize: '1.4rem' }}>
            corsair
            <span style={{ fontSize: '0.7rem', border: '1px solid var(--accent-1)', padding: '2px 8px', borderRadius: '12px', marginLeft: '10px', verticalAlign: 'middle', color: 'var(--accent-1)' }}>7.5k★</span>
          </h3>
          <a href="https://github.com/corsairdev/corsair/pull/605" target="_blank" rel="noopener noreferrer" className="btn-small">PR #605 ↗</a>
        </div>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontFamily: 'monospace' }}>TypeScript · Node.js</div>
        <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          <li style={{ marginBottom: '8px' }}>Sentry webhook signatures were compared with plain ===, vulnerable to timing attacks.</li>
          <li style={{ marginBottom: '8px' }}>Replaced it with the shared constant-time verifyHmacSignature helper and added 7 unit tests.</li>
        </ul>
      </div>
    </section>
  );
};

export default OpenSource;
