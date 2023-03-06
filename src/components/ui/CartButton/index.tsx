import React, { useEffect, useRef } from 'react';
import { Cart as CartIcon } from '@styled-icons/icomoon/Cart';
import CartList from 'components/ui/CartList';
import useCart from 'hooks/useCart';
import * as S from './styles';

const CartButton = () => {
  const { cartItems, cartIsVisible, changeCartVisibility } = useCart();
  const cartListRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (cartListRef.current && !cartListRef.current.contains(event.target)) {
        changeCartVisibility(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [cartListRef, changeCartVisibility]);

  return (
    <S.Wrapper>
      {cartItems.length}
      <S.ButtonWrapper>
        <S.IconWrapper onMouseOver={() => changeCartVisibility(true)}>
          <CartIcon size={30} />
          <S.CartCount isVisible={!!cartItems.length}>
            {cartItems.length > 99 ? '99+' : cartItems.length}
          </S.CartCount>
        </S.IconWrapper>

        <S.CartListWrapper visible={cartIsVisible} ref={cartListRef}>
          <CartList />
        </S.CartListWrapper>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default CartButton;
