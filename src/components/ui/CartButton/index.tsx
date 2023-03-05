import React, { useEffect, useState } from 'react';
import { Cart as CartIcon } from '@styled-icons/icomoon/Cart';
import CartList from 'components/ui/CartList';
import * as S from './styles';
import useCart from 'hooks/useCart';

const CartButton = () => {
  const { items, addItem, removeItem, clearCart } = useCart();
  const [cartCount, setCartCount] = useState(1);

  useEffect(() => {
    const count = items.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  }, [items]);

  return (
    <S.Wrapper>
      <S.ButtonWrapper>
        <S.IconWrapper>
          <CartIcon size={30} color="#b5b5b5" />
          <S.CartCount>{cartCount}</S.CartCount>
        </S.IconWrapper>

        <S.CartListWrapper>
          <CartList />
        </S.CartListWrapper>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default CartButton;
