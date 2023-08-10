import { useState, createContext, useContext } from "react";

const CartContext = createContext();
export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const increaseCartCount = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <CartContext.Provider value={{ cartCount, increaseCartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
