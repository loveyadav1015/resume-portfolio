import { portfolioData } from '../data/portfolio';

const OpenSource = () => {
  const { openSource } = portfolioData;

  return (
    <div className="work-submodule" id="opensource-module">
      <h3 className="module-title">Open Source Contributions</h3>
      <article className="bento-card opensource-bento-card">
        <div className="project-card-header">
          <div className="project-title-group">
            <h4 className="project-title">
              {openSource.project}
              <span className="project-chip stars-chip">{openSource.stars}</span>
            </h4>
          </div>
          <a
            href={openSource.prUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-action-link"
          >
            {openSource.prLabel}
          </a>
        </div>

        <p className="project-stack">{openSource.stack}</p>

        <ul className="project-points">
          {openSource.points.map((pt, idx) => (
            <li key={idx}>{pt}</li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default OpenSource;
