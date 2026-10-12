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

const Footer = () => {
  const { identity, socialLinks } = portfolioData;

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-handle">{identity.handle}</span>
            <span className="footer-name">{identity.name}</span>
          </div>

          <div className="footer-social-links" aria-label="Social Profiles">
            {socialLinks.map((item) => {
              const IconComp = iconMap[item.icon] || SiGithub;
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target={item.url.startsWith('http') ? '_blank' : undefined}
                  rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={item.name}
                  className="footer-social-icon"
                >
                  <IconComp size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} {identity.name}. All rights reserved.
          </p>
          <div className="footer-contact">
            <a href={`mailto:${identity.email}`} className="footer-email">
              {identity.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
