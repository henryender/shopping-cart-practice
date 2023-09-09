import React, { createContext, useState } from "react";

export const shopContext = createContext(null);

const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const AddItem = (product) => {
    const FindProduct = cartItems.find((x) => x.id === product.id);
    if (FindProduct) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.id === product.id
    );

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.Price * item.quantity,
      0
    );
  };

  const contextValue = {
    cartItems,
    setCartItems,
    AddItem,
    removeFromCart,
    getCartTotal,
  };
  return (
    <div>
      <shopContext.Provider value={contextValue}>
        {children}
      </shopContext.Provider>
    </div>
  );
};

export default StateContext;
