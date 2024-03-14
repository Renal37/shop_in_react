import './product-card.component.scss'


import { selectCartItems } from '../../store/cart/cart.select';
import { addItemToCart } from '../../store/cart/cart.action';
import Button,{BUTTON_TYPE} from '../button/button.component';
import { useDispatch,useSelector } from 'react-redux';

const ProductCard = ({product}) =>{
    const{name,price,imageUrl} = product
    const dispatch = useDispatch();
    const cartItems= useSelector(selectCartItems);
    const addProductToCart =()=>dispatch(addItemToCart(cartItems,product));
    return(
        <div className='product-card-container' >
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className='name'>{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE.inverted} onClick={addProductToCart}>Add to card</Button>
        </div>
    )
}

export default ProductCard;