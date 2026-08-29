import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Read-it — Full-Stack Book Platform",
      stack: "Spring Boot · React · Vite · AWS",
      description: [
        "Developed a comprehensive full-stack application for managing book libraries.",
        "Architected the backend controller and service layers, establishing seamless REST API integration.",
        "Configured CORS to ensure secure and reliable communication between the Java backend and React frontend."
      ],
      link: "http://3.104.37.96/",
      linkText: "live site ↗"
    },
    {
      title: "AstroSentinel",
      stack: "React (Vite) · Node.js / Express · Supabase PostgreSQL · Groq LLM",
      description: [
        "Built a full-stack agentic web app that autonomously monitors Near-Earth Objects via NASA's NeoWS API, using a cron-scheduled perception loop and a Supabase-backed memory layer for context-aware queries.",
        "Integrated a Groq-powered AI chatbot for space-science Q&A and developed an interactive 3D star-field dashboard with Three.js, risk classification badges, and a filterable NEO data table."
      ],
      link: "https://astrosentinel.netlify.app/",
      linkText: "live site ↗"
    },
    {
      title: "Hephaestus",
      tag: "team project",
      stack: "Python (FastAPI) · LangGraph · Next.js · MongoDB · Redis",
      description: [
        "Collaborated with a teammate to design a local-first, multi-agent system that manages the full lifecycle of neural network training — from data curation to PyTorch deployment — while enforcing consumer hardware memory limits to prevent OOM crashes.",
        "Contributed to a Dockerized microservice stack (Next.js frontend, LangGraph-driven Python backend, Redis, MongoDB, SearXNG) enabling agent-coordinated, hands-off ML experimentation."
      ],
      link: "https://github.com/Ewan-Dkhar/hephaestus",
      linkText: "github ↗"
    },
    {
      title: "Clothing Size Prediction Model",
      tag: "team project",
      stack: "Python · OpenCV · TensorFlow · FastAPI",
      description: [
        "Built an MVP with a teammate that estimates body size category (S/M/L/XL) from a single video and the user's height, using MoveNet pose detection to measure torso, shoulder, hip, arm, and leg proportions without physical measurement.",
        "Developed a FastAPI backend to normalize pixel-to-cm ratios and classify size via a scikit-learn/TensorFlow model; presented the working prototype at the Microsoft Imagine Cup hackathon."
      ],
      link: "https://youtu.be/rDzvMuLSO1s?si=eIU-eyLEIARrS6pm",
      linkText: "demo ↗"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="section-header">
        <h2>Projects</h2>
      </div>

      <div className="projects-grid" style={{ gridTemplateColumns: '1fr', gap: '20px' }}>
        {projects.map((project, index) => (
          <div key={index} className="project-card" style={{ padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
              <h3 style={{ margin: 0, fontSize: '1.4rem' }}>
                {project.title}
                {project.tag && <span style={{ fontSize: '0.7rem', border: '1px solid var(--accent-1)', padding: '2px 8px', borderRadius: '12px', marginLeft: '10px', verticalAlign: 'middle', color: 'var(--accent-1)' }}>{project.tag}</span>}
              </h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-small">{project.linkText}</a>
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontFamily: 'monospace' }}>{project.stack}</div>
            <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              {project.description.map((desc, idx) => (
                <li key={idx} style={{ marginBottom: '8px' }}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
