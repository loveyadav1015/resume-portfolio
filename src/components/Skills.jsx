import { portfolioData } from '../data/portfolio';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <div className="work-submodule" id="skills-module">
      <h3 className="module-title">Technical Skills</h3>
      <div className="skills-bento-grid">
        {skills.map((category, index) => (
          <div key={index} className="bento-card skill-category-card">
            <h4 className="skill-cat-title">{category.title}</h4>
            <div className="skill-tags-wrap">
              {category.skills.map((skill, sIndex) => (
                <span key={sIndex} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
