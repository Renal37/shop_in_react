import { AnyAction } from 'redux-saga';
import { SetCartItems, cartAction, setIsCartOpen } from './cart.action';
import { CartItem } from './cart.types';

export type cartState = {
   cartItems: CartItem[];
   isCartOpen: boolean;
};
export type state ={
  state:any;
  cart:any;
  categories:any;
}

const CART_INITIAL_STATE: cartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action/* :AnyAction */  ={ }as cartAction): cartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    }
  }
  if (SetCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  return state;

};