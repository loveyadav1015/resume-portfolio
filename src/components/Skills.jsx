import React from 'react';

const Skills = () => {
  const skillCategories = [
    { title: "Languages", skills: ["C++", "Java", "Python", "Solidity"] },
    { title: "Web", skills: ["React", "Vite", "Spring Boot", "Tailwind CSS"] },
    { title: "Machine Learning", skills: ["Computer Vision", "Linear / Logistic Regression", "Neural Networks", "RNN", "ResNet"] },
    { title: "ML Frameworks", skills: ["TensorFlow", "Keras", "Scikit-Learn"] },
    { title: "Databases", skills: ["SQL", "PostgreSQL"] },
    { title: "Tools", skills: ["Git", "Netlify", "VS Code", "Linux (Arch)", "Kaggle"] }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="section-header">
        <h2>Technical Skills</h2>
      </div>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category" style={{ padding: '20px 30px' }}>
            <h3 className="category-title" style={{ fontSize: '1.1rem', marginBottom: '15px' }}>{category.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {category.skills.map((skill, sIndex) => (
                <span key={sIndex} style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-main)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  padding: '6px 12px',
                  borderRadius: '8px'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
