import ProductCard from '../product-card/product-card.component';

import { Link } from 'react-router-dom';

import './category-preview.style.scss'

const CategoryPreview = ({title,products})=>{
    return(
        <div className='category-preview-container'>
            <h2>
            <Link to={title} className='title'>{title.toUpperCase()}</Link>
                {/* <a href={`shop/${title.toLowerCase()}`} className='title'>{title.toUpperCase()}</a> */}
            </h2>
            <div className='preview'>
                {
                    products.filter((_,idx)=> idx<4).map((product)=>
                    <ProductCard key={product.id} product={product}></ProductCard>
                    )
                }

            </div>

        </div>
    )

}

export default CategoryPreview;