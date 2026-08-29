import React from 'react';

const Achievements = () => {
  const achievementsList = [
    {
      title: "Agentic Arena 2026",
      desc: "Secured a place among the Top 15 Finalists in the AI Agent Battle organized by TechVerse Solutions, competing nationwide on agentic AI system design."
    },
    {
      title: "Devengers PromptWars 2026",
      desc: "Recognized for participation in a Google for Developers AI Prompt Engineering Hackathon featuring 1,500+ participants nationwide."
    },
    {
      title: "Hackathon Competitor",
      desc: "Actively participated in the Microsoft Imagine Cup (2026)."
    },
    {
      title: "Competitive Programming",
      desc: "Active algorithm solver on Codeforces, consistently tackling data structure and algorithm challenges involving greedy logic, bitwise operations, and stacks."
    }
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="section-header">
        <h2>Achievements</h2>
      </div>
      <div className="skill-category" style={{ padding: '30px' }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {achievementsList.map((item, idx) => (
            <li key={idx} style={{ marginBottom: idx === achievementsList.length - 1 ? '0' : '15px', paddingBottom: idx === achievementsList.length - 1 ? '0' : '15px', borderBottom: idx === achievementsList.length - 1 ? 'none' : '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--text-main)' }}>{item.title}</strong> — {item.desc}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
