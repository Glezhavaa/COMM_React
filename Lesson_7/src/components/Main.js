import Card from "./Card";

const products = [
  {
    title: "Product 1",
    alt: "Image-1",
    description: ["In Stock", "3.7/5"],
    badges: ["sport", "lifestyle"],
  },
  {
    title: "Product 2",
    alt: "Image-1",
    description: ["In Stock", "3.5/5"],
    badges: ["sport", "lifestyle"],
  },
  {
    title: "Product 3",
    alt: "Image-1",
    description: ["In Stock", "3.5/5"],
    badges: ["sport", "lifestyle"],
  },
  {
    title: "Product 4",
    alt: "Image-1",
    description: ["In Stock", "3.5/5"],
    badges: ["sport"],
  },
  {
    title: "Product 5",
    alt: "Image-1",
    description: ["In Stock", "4/5"],
    badges: ["sport", "lifestyle"],
  },
  {
    title: "Product 6",
    alt: "Image-1",
    description: ["In Stock", "5/5"],
    badges: ["sport"],
  },
];

function Main() {
  return (
    <main className="container">
      {products.map((product) => (
        <Card
          key={product.title}
          title={product.title}
          alt={product.alt}
          descriptions={product.description}
          badges={product.badges}
        />
      ))}
    </main>
  );
}

export default Main;
