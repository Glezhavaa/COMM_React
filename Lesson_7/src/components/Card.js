import Description from "./Description";
import Badges from "./Badges";

function Card({ title, alt, descriptions, badges }) {
  return (
    <div className="shopping-item">
      <h3>{title}</h3>
      <img src="https://source.unsplash.com/random/200x300" alt={alt} />
      <Description descriptions={descriptions} />
      <Badges badges={badges} />
      <button className="button">Add to Cart</button>
    </div>
  );
}

export default Card;
