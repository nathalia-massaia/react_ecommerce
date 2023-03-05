import { createContext, useState } from 'react';
import { CartItemProps } from 'models/cart';

type CartContextType = {
  cartItems: CartItemProps[];
  cartIsVisible: boolean;
  setCartItems: (items: CartItemProps[]) => void;
  setCartIsVisible: (isVisible: boolean) => void;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  cartIsVisible: false,
  setCartItems: () => {},
  setCartIsVisible: () => {}
});

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [cartIsVisible, setCartIsVisible] = useState(false);

  return (
    <CartContext.Provider
      value={{ cartItems, cartIsVisible, setCartItems, setCartIsVisible }}
    >
      {children}
    </CartContext.Provider>
  );
};
