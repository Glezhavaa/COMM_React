import Card from "./Components/card.js";
import Category from "./Components/category.js";
const products = [
    {
      title: "Product 1",
      alt: "Image-1",
      img: "https://source.unsplash.com/random/200x300",
      description: ["In Stock", "3.7/5"],
      badges: ["sport", "lifestyle"],
    },
    {
      title: "Product 2",
      alt: "Image-1",
      img: "https://source.unsplash.com/random/200x300",
      description: ["In Stock", "3.5/5"],
      badges: ["sport", "lifestyle"],
    },
    {
      title: "Product 3",
      alt: "Image-1",
      img: "https://source.unsplash.com/random/200x300",
      description: ["In Stock", "3.5/5"],
      badges: ["sport", "lifestyle"],
    },
    {
      title: "Product 4",
      alt: "Image-1",
      img: "https://source.unsplash.com/random/200x300",
      description: ["In Stock", "3.5/5"],
      badges: ["sport"],
    },
    {
      title: "Product 5",
      alt: "Image-1",
      img: "https://source.unsplash.com/random/200x300",
      description: ["In Stock", "4/5"],
      badges: ["sport", "lifestyle"],
    },
    {
      title: "Product 6",
      alt: "Image-1",
      img: "https://source.unsplash.com/random/200x300",
      description: ["In Stock", "5/5"],
      badges: ["sport"],
    },
  ];


function App() {
    return React.createElement("div", {id: "root"}, [
      React.createElement("main", {className: "container"}, [
        ...products.map((product) => 
            React.createElement(Card, {
                title: product.title,
                img: product.img,
                alt: product.alt,
                badge1: product.badges[0],
                badge2: product.badges[1],
                stock: product.description[0],
                amount: product.description[1],
            })
        ),
    ]),
    React.createElement(Category, null),
  ])
};
ReactDOM.render(App(), document.querySelector("body"));

