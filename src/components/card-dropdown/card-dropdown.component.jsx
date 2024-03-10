import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/card.context';

import { CartDropdownContainer,EmptyMessage,CartItems } from './card-dropdown.style';
import Button from '../button/button.component'
import CartItem from '../cart-item/card-item.component';

const CardDropdown = () => {
    const {cartItems}=useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckout = ()=>{
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? 
                   ( cartItems.map(item=><CartItem cartItem={item} />)):(
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                   )
                }
            </CartItems>
            <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );  

}

export default CardDropdown