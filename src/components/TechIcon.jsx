import {
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiKubernetes,
  SiVim,
  SiGraphql,
  SiTailwindcss,
  SiDocker,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiReact
} from 'react-icons/si';
import {
  FaAws,
  FaApple,
  FaLinux,
  FaWindows
} from 'react-icons/fa';

const iconMap = {
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiKubernetes,
  SiVim,
  SiGraphql,
  SiTailwindcss,
  SiDocker,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiReact,
  FaAws,
  FaApple,
  FaLinux,
  FaWindows
};

const TechIcon = ({ name, icon, color, size = 32 }) => {
  const IconComponent = iconMap[icon];

  if (!IconComponent) {
    return <span className="tech-fallback-icon" title={name}>{name.slice(0, 2)}</span>;
  }

  return (
    <div className="tech-icon-wrapper" title={name}>
      <IconComponent size={size} style={{ color: color || 'currentColor' }} />
    </div>
  );
};

export default TechIcon;
