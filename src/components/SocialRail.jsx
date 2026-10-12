import { portfolioData } from '../data/portfolio';
import {
  SiGithub,
  SiX,
  SiInstagram,
  SiDiscord,
  SiCodeforces
} from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

const iconMap = {
  github: SiGithub,
  linkedin: FaLinkedin,
  x: SiX,
  instagram: SiInstagram,
  discord: SiDiscord,
  codeforces: SiCodeforces
};

const SocialRail = () => {
  const { socialLinks } = portfolioData;

  return (
    <aside className="social-rail" aria-label="Social links">
      <div className="social-rail-pill">
        {socialLinks.map((item) => {
          const IconComp = iconMap[item.icon] || SiGithub;
          return (
            <a
              key={item.name}
              href={item.url}
              target={item.url.startsWith('http') ? '_blank' : undefined}
              rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={item.name}
              className="social-rail-link"
            >
              <IconComp size={20} />
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default SocialRail;
