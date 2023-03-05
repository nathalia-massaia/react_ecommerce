import { useState } from 'react';
import { ProductProps } from 'models/product';

type CartItemProps = ProductProps & { quantity: number };

type CartProps = {
  items: CartItemProps[];
  addItem: (product: ProductProps) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
};

const useCart = (): CartProps => {
  const [items, setItems] = useState<CartItemProps[]>([]);

  const addItem = (product: ProductProps) => {
    const existingItem = items.find((item) => item.id === product.id);

    if (existingItem) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  return { items, addItem, removeItem, clearCart };
};

export default useCart;
