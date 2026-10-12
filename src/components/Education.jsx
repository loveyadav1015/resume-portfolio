import { portfolioData } from '../data/portfolio';

const Education = () => {
  const { education } = portfolioData;

  return (
    <div className="work-submodule" id="education-module">
      <h3 className="module-title">Education</h3>
      <div className="bento-card education-bento-card">
        <div className="education-header">
          <span className="education-inst">{education.institution}</span>
          <span className="education-grad">{education.graduation}</span>
        </div>
        <p className="education-details">
          {education.degree} · CGPA {education.cgpa} · {education.location}
        </p>
      </div>
    </div>
  );
};

export default Education;
