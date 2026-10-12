import TechIcon from './TechIcon';

const Marquee = ({ items = [] }) => {
  // Duplicate list twice so continuous loop has no gaps
  const displayItems = [...items, ...items, ...items];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {displayItems.map((item, index) => (
          <div key={`${item.name}-${index}`} className="marquee-item">
            <TechIcon name={item.name} icon={item.icon} color={item.color} size={34} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
