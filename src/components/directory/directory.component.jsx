import CategoryItem from "../category-item/category-item.components";

const Directory =({categories})=>(
    <div className="categories-container">
    {categories.map((category) => (
      <CategoryItem category={category} />

    ))}
  </div>
)
export default Directory;