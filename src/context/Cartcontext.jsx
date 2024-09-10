import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setwishlistItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  const addToWishlist = (product) => {
    if (!wishlistItems.find((item) => item.id === product.id)) {
      setwishlistItems([...wishlistItems, product]);
    }
  };
  const removeFromWishlist = (id) => {
    setwishlistItems(wishlistItems.filter((item) => item.id !== id));
  };
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateItemQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        addToWishlist,
        removeFromWishlist,
        removeFromCart,
        updateItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
