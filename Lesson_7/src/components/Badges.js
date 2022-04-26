function Badges({ badges }) {
  return (
    <div className="badges">
      {badges.map((badge, i) => (
        <span className={`badge-${i + 1}`} key={badge}>
          {badge}
        </span>
      ))}
    </div>
  );
}

export default Badges;
