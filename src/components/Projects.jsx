import { portfolioData } from '../data/portfolio';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <div className="work-submodule" id="projects-module">
      <h3 className="module-title">Projects</h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="bento-card project-bento-card">
            <div className="project-card-header">
              <div className="project-title-group">
                <h4 className="project-title">{project.title}</h4>
                {project.tag && (
                  <span className="project-chip">{project.tag}</span>
                )}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-action-link"
                >
                  {project.linkText}
                </a>
              )}
            </div>

            <p className="project-stack">{project.stack}</p>

            <ul className="project-points">
              {project.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
