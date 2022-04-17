function Category() {
    return React.createElement("section", {className: "container"}, [
        React.createElement("div", {className: "block-listing"}, [
          React.createElement("span", {className: "badge-1"}, "Category 1"),
          React.createElement("span", {className: "badge-2"}, "Category 2"),
          React.createElement("span", {className: "badge-3"}, "Category 3"),
          React.createElement("span", {className: "badge-4"}, "Category 4"),
        ]),
        React.createElement("div", {className: "banner"}),
      ]);
}

export default Category;