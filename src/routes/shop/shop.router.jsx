import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../categories-preview/categories-preview.routes"
import Category from "../category/category.routes";
import { getCategotiesAndDocument } from "../../utils/firebase/firebase.utils";
import { setCategories } from '../../store/categories/category.action';
import './shop.style.scss'

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      const getCategoriesMap = async () => {
        const categories = await getCategotiesAndDocument('categories');
        dispatch(setCategories(categories));
      };
  
      getCategoriesMap();
    }, []);
    return (
            <Routes>
                <Route index element={<CategoriesPreview />} />
                <Route path=":category" element={<Category />} />
            </Routes>
    )
}

export default Shop;