import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
        {...cartItem,quantity: cartItem.quantity+1}:cartItem
        );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}
const removeCartItem = (cartItems,cartItemToRemove)=>{
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  if(existingCartItem.quantity === 1){
    return cartItems.filter((cartItem) =>cartItem.id !== cartItemToRemove.id);
   }
     return cartItems.map((cartItem) => 
     cartItem.id === cartItemToRemove.id 
     ? {...cartItem,quantity: cartItem.quantity-1}
     :cartItem
     );
}

const cleareCartItem =(cartItems,cartItemToClear)=>{
  return cartItems.filter((cartItem) =>cartItem.id !== cartItemToClear.id);
}



export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemToCart: ()=>{},
    cleareItemFromCart: ()=>{},
    cartTotal:0,
    cartCount: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setIsCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
  
    useEffect(() => {
      const newCartTotal = cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity* cartItem.price,
        0
      );
      setCartTotal(newCartTotal);
    }, [cartItems]);
    useEffect(() => {
      const newCartCount = cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
      );
      setCartCount(newCartCount);
    }, [cartItems]);
    const addItemToCart = (productToAdd) => {
        setIsCartItems(addCartItem(cartItems, productToAdd,cartCount));
    }
    const removeItemToCart = (cartItemToRemove) => {
      setIsCartItems(removeCartItem(cartItems, cartItemToRemove));
  }
  const cleareItemFromCart = (cartItemToClear) => {
    setIsCartItems(cleareCartItem(cartItems, cartItemToClear));
}


    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemToCart,
        cleareItemFromCart,
        cartItems,
        cartCount,
        cartTotal
      };
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}