import React from 'react';
import { Cart as CartIcon } from '@styled-icons/icomoon/Cart';
import * as S from './styles';

const CartButton = () => {
  return (
    <S.Wrapper>
      <CartIcon size={30} color="#b5b5b5" />
    </S.Wrapper>
  );
};

export default CartButton;
