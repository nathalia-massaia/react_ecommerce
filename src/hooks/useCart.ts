import { useContext, useMemo } from 'react';
import { CartContext } from 'context/cart';
import { CartProps } from 'models/cart';
import { ProductProps } from 'models/product';

const useCart = (): CartProps => {
  const { cartItems, setCartItems, cartIsVisible, setCartIsVisible } =
    useContext(CartContext);

  const addItem = (product: ProductProps) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    setCartIsVisible(true);
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleItemQuantity = (id: number, action: '+' | '-') => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: action === '+' ? ++item.quantity : --item.quantity
            }
          : item
      )
    );
  };

  const changeCartVisibility = (isVisible: boolean) => {
    setCartIsVisible(isVisible);
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  }, [cartItems]);

  return {
    cartItems,
    cartIsVisible,
    changeCartVisibility,
    subtotal,
    addItem,
    removeItem,
    clearCart,
    handleItemQuantity
  };
};

export default useCart;
