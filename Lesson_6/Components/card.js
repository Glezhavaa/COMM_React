function Card(props) {
    return React.createElement("div", {className: "shopping-item"}, [
        React.createElement("h3", null, props.title),
        React.createElement("img", {
            src: props.img,
            alt: props.alt,
        }),
        React.createElement("div", {className: "description"}, [
            React.createElement("span", null, props.stock),
            React.createElement("span", null, props.amount),
        ]),
        React.createElement("div", {className: "badges"}, [
            React.createElement("span", {className: "badge-1"}, props.badge1),
            React.createElement("span", {className: "badge-2"}, props.badge2),
        ]),
        React.createElement("button", null, "Add To Cart")
    ]);
}

export default Card;