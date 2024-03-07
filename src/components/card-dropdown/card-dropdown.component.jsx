import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/card.context';
import './card-dropdown.style.scss';
import Button from '../button/button.component'
import CartItem from '../cart-item/card-item.component';

const CardDropdown = () => {
    const {cartItems}=useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckout = ()=>{
        navigate('/checkout');
    }

    return (
        <div className='cart-dropdown-container'>
            <div className="cart-items" >
            {cartItems.map(item=><CartItem cartItem={item} />)}
            </div>
            <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </div>
    )

}

export default CardDropdown