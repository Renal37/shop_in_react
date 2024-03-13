import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import CategoryPreview from "../../components/category-preview/category-preview.camponent";


const CategoriesPreview = () => {
    const categories = useSelector(selectCategoriesMap)
    return (
        <Fragment>
            {Object.keys(categories).map((title) => {
                const products = categories[title];
                return <CategoryPreview key={title} title={title} products={products}></CategoryPreview>
            }
            )}

        </Fragment>
    )
}

export default CategoriesPreview;