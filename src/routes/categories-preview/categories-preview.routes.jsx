import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap, selectIsLoading } from "../../store/categories/category.selector";
import CategoryPreview from "../../components/category-preview/category-preview.camponent";
import Spinner from "../../components/spinner/spinner.component";


const CategoriesPreview = () => {
    const categories = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsLoading);
    return (
        <Fragment>
            {
                isLoading ? (<Spinner />) : (
                    (
                        Object.keys(categories).map((title) => {
                            const products = categories[title];
                            return (<CategoryPreview key={title} title={title} products={products}></CategoryPreview>);
                        }
                        )
                    )
                )
            }

        </Fragment>
    )
}

export default CategoriesPreview;