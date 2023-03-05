import { ProductProps } from 'models/product';

export type CartItemProps = ProductProps & { quantity: number };

export type CartProps = {
  cartItems: CartItemProps[];
  subtotal: number;
  cartIsVisible: boolean;
  addItem: (product: ProductProps) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  handleItemQuantity: (id: number, action: '+' | '-') => void;
  changeCartVisibility: (isVisible: boolean) => void;
};
