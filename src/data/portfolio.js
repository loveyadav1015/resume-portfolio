export const portfolioData = {
  identity: {
    handle: "resume-portfolio",
    name: "Love Yadav",
    // Exact tagline from existing Hero.jsx
    tagline: "B.Tech Computer Science, IIIT Lucknow / Competitive Programmer / Full-Stack & ML Developer",
    email: "loveyadav2538@gmail.com",
    phone: "+919258974898",
    location: "Lucknow, UP",
    bio: "I build web apps with JavaScript, TypeScript, and Python — React up front, Node behind it. Currently digging into backend systems — Postgres, Redis, AWS — and working toward open-source contributions.",
    lore: "resume-portfolio — a curated showcase of my full-stack projects, machine learning models, and competitive programming achievements.",
    splitFlapPrefix: "I'm",
    splitFlapWords: ["STUDENT", "BUILDER", "SOLVER", "DEV", "CODER"]
  },

  socialLinks: [
    { name: "GitHub", icon: "github", url: "https://github.com/loveyadav1015" },
    { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/love-yadav-b13b46380/" },
    { name: "X", icon: "x", url: "#" }, // No real URL in repo, documented in final report
    { name: "Instagram", icon: "instagram", url: "#" }, // No real URL in repo, documented in final report
    { name: "Discord", icon: "discord", url: "#" }, // No real URL in repo, documented in final report
    { name: "Codeforces", icon: "codeforces", url: "https://codeforces.com/profile/love_044" }
  ],

  learningTech: [
    { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
    { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
    { name: "Redis", icon: "SiRedis", color: "#DC382D" },
    { name: "Kubernetes", icon: "SiKubernetes", color: "#326CE5" },
    { name: "AWS", icon: "FaAws", color: "#FF9900" },
    { name: "Vim", icon: "SiVim", color: "#019733" },
    { name: "GraphQL", icon: "SiGraphql", color: "#E10098" },
    { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
    { name: "Docker", icon: "SiDocker", color: "#2496ED" }
  ],

  currentStack: [
    { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
    { name: "Python", icon: "SiPython", color: "#3776AB" },
    { name: "Node.js", icon: "SiNodedotjs", color: "#5FA04E" },
    { name: "React", icon: "SiReact", color: "#61DAFB" },
    { name: "macOS", icon: "FaApple", color: "#FFFFFF" },
    { name: "Linux", icon: "FaLinux", color: "#FCC624" },
    { name: "Windows", icon: "FaWindows", color: "#0078D4" },
    { name: "Docker", icon: "SiDocker", color: "#2496ED" }
  ],

  education: {
    institution: "Indian Institute of Information Technology (IIIT), Lucknow",
    degree: "B.Tech in Computer Science",
    cgpa: "8.8 / 10",
    graduation: "Expected May 2029",
    location: "Lucknow, UP"
  },

  achievements: [
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
  ],

  openSource: {
    project: "corsair",
    stars: "7.5k★",
    prUrl: "https://github.com/corsairdev/corsair/pull/605",
    prLabel: "PR #605 ↗",
    stack: "TypeScript · Node.js",
    points: [
      "Sentry webhook signatures were compared with plain ===, vulnerable to timing attacks.",
      "Replaced it with the shared constant-time verifyHmacSignature helper and added 7 unit tests."
    ]
  },

  projects: [
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
  ],

  skills: [
    { title: "Languages", skills: ["C++", "Java", "Python", "Solidity"] },
    { title: "Web", skills: ["React", "Vite", "Spring Boot", "Tailwind CSS"] },
    { title: "Machine Learning", skills: ["Computer Vision", "Linear / Logistic Regression", "Neural Networks", "RNN", "ResNet"] },
    { title: "ML Frameworks", skills: ["TensorFlow", "Keras", "Scikit-Learn"] },
    { title: "Databases", skills: ["SQL", "PostgreSQL"] },
    { title: "Tools", skills: ["Git", "Netlify", "VS Code", "Linux (Arch)", "Kaggle"] }
  ]
};
