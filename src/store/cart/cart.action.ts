import { CategoryItem } from "../categories/category.types";
import {CART_ACTION_TYPES,CartItem} from "./cart.types";
import { createAction,withMatcher,Action,AnyActionWithPayload} from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems:CartItem[], productToAdd:CategoryItem):CartItem[] => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};


const removeCartItem = (cartItems:CartItem[], cartItemToRemove:CartItem):CartItem[] => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );
    if (existingCartItem&&  existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};
const cleareCartItem = (cartItems:CartItem[], cartItemToClear:CartItem):CartItem[] => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}

export type setIsCartOpen = AnyActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean>;

export type SetCartItem = AnyActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEM ,CartItem[]>;

export const SetCartItems  = withMatcher((cartItems:CartItem[]):SetCartItem =>createAction(CART_ACTION_TYPES.SET_CART_ITEM,cartItems))

export const addItemToCart = (cartItems:CartItem[],productToAdd:CategoryItem) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return SetCartItems(newCartItems);
}

export const removeItemToCart = (cartItems:CartItem[],cartItemToRemove:CartItem) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return SetCartItems(newCartItems);
}

export const cleareItemFromCart = (cartItems:CartItem[],cartItemToClear:CartItem) => {
    const newCartItems = cleareCartItem(cartItems, cartItemToClear);
    return SetCartItems(newCartItems);
}
export const setIsCartOpen = withMatcher((boolean:boolean):setIsCartOpen =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));

  export type cartAction = |setIsCartOpen|SetCartItem;
