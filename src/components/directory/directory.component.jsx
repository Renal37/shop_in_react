import DirectoryItem from "../directory-item/directory-item.components";
import './directory.styles.scss'


const Directory =({categories})=>(
    <div className="categories-container">
    {categories.map((category) => (
      <DirectoryItem category={category} />

    ))}
  </div>
)
export default Directory;