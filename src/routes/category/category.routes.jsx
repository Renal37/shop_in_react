import { useParams } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';

import './category.style.scss'
import ProductCard from '../../components/product-card/product-card.component';

const Category =()=>{
  const {category} = useParams();
 const categories = useSelector(selectCategoriesMap)
 const [products,setProducts] = useState(categories[category]);
 useEffect(()=>{
    setProducts(categories[category]);
 },[category,categories])

 return(
   <Fragment>
   <h2 className='title'>{category.toUpperCase()}</h2>
    <div className='category-container'>
        {
          products &&  products.map((product)=><ProductCard key={product.id} product={product}/>)
        }
    </div>
   </Fragment>
 )
};


export default Category;
