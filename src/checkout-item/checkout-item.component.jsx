import './checkout-item.style.scss'

import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../store/cart/cart.select';
import { addItemToCart,cleareItemFromCart,removeItemToCart } from '../store/cart/cart.action';



const CheckoutItem = ({ cartItem  }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();
    const useItems = useSelector(selectCartItems)
    const clearItemHandler = () =>dispatch(cleareItemFromCart(useItems,cartItem));
    const removeItemHandler = () =>dispatch(removeItemToCart(useItems,cartItem));
    const addItemHandler = () =>dispatch(addItemToCart(useItems,cartItem));
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'> {price}</span>
            <div className='remove-button' onClick={clearItemHandler}>
                &#10005;
            </div>
        </div>
    )
}

export default CheckoutItem;