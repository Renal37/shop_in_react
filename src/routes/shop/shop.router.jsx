import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.camponent";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.style.scss'

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <div className="shop-container">
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products}></CategoryPreview>
            }
            )}

        </div>
    )
}

export default Shop;