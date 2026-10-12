import { portfolioData } from '../data/portfolio';
import SplitFlap from './SplitFlap';
import Marquee from './Marquee';
import TechIcon from './TechIcon';

const About = () => {
  const { identity, learningTech, currentStack } = portfolioData;

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-bento-grid">
        {/* Card 1: Full-width Intro Card on Top */}
        <div className="bento-card bento-card-full intro-card">
          <SplitFlap
            prefix={identity.splitFlapPrefix}
            words={identity.splitFlapWords}
          />
          <p className="intro-bio">{identity.bio}</p>
        </div>

        {/* Card 2: Full-width Marquee Card */}
        <div className="bento-card bento-card-full marquee-card">
          <h3 className="card-label">CURRENTLY LEARNING.</h3>
          <Marquee items={learningTech} />
        </div>

        {/* Card 3: LORE (Left, side-by-side with CURRENT STACK) */}
        <div className="bento-card lore-card">
          <h3 className="card-label">LORE .</h3>
          <p className="lore-text">{identity.lore}</p>
        </div>

        {/* Card 4: CURRENT STACK (Right, side-by-side with LORE) */}
        <div className="bento-card stack-card">
          <h3 className="card-label text-center">CURRENT STACK.</h3>
          <div className="stack-icons-row">
            {currentStack.map((item) => (
              <TechIcon
                key={item.name}
                name={item.name}
                icon={item.icon}
                color={item.color}
                size={32}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
