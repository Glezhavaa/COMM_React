const categories = [1, 2, 3, 4, 5];

function Category() {
  return (
    <div className="block-listing">
      {categories.map((singleCategory) => (
        <span className={`badge-${singleCategory}`} key={categories}>
          Category {singleCategory}
        </span>
      ))}
    </div>
  );
}

export default Category;
