import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../categories-preview/categories-preview.routes"
import Category from "../category/category.routes";
import { fetchCategoriesStartAsync } from '../../store/categories/category.action';
import './shop.style.scss'

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchCategoriesStartAsync());
    }, []);
    return (
            <Routes>
                <Route index element={<CategoriesPreview />} />
                <Route path=":category" element={<Category />} />
            </Routes>
    )
}

export default Shop;