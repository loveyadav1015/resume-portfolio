import { portfolioData } from '../data/portfolio';

const Achievements = () => {
  const { achievements } = portfolioData;

  return (
    <div className="work-submodule" id="achievements-module">
      <h3 className="module-title">Achievements</h3>
      <div className="bento-card achievements-bento-card">
        <ul className="achievements-list">
          {achievements.map((item, idx) => (
            <li key={idx} className="achievement-item">
              <strong className="achievement-title">{item.title}</strong>
              <span className="achievement-separator"> — </span>
              <span className="achievement-desc">{item.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
