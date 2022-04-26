function Description({ descriptions }) {
  return (
    <div className="description">
      {descriptions.map((description) => (
        <span key={description}>{description}</span>
      ))}
    </div>
  );
}

export default Description;
