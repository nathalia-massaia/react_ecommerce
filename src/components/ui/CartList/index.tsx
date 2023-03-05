import React from 'react';
import useCart from 'hooks/useCart';
import CartListItem from 'components/ui/CartListItem';
import { currencyFormatter } from 'utils/currencyFormatter';
import * as S from './styles';

const CartList = () => {
  const { cartItems, subtotal } = useCart();

  return (
    <S.Wrapper>
      {!!cartItems.length ? (
        <>
          <S.ListWrapper>
            {cartItems.map((item) => (
              <CartListItem {...item} key={item.id} />
            ))}
          </S.ListWrapper>

          <S.OrderInfoWrapper>
            <S.OrderInfo>
              <strong>Subtotal</strong>
              {currencyFormatter(subtotal)}
            </S.OrderInfo>

            <S.OrderInfo>
              <strong>Shipping</strong>
              Free
            </S.OrderInfo>

            <S.OrderInfo>
              <strong>Total</strong>
              {currencyFormatter(subtotal)}
            </S.OrderInfo>
          </S.OrderInfoWrapper>

          <S.ActionWrapper>
            <button onClick={() => console.log('checkout')}>CHECKOUT</button>
          </S.ActionWrapper>
        </>
      ) : (
        <span>Cart is empty</span>
      )}
    </S.Wrapper>
  );
};

export default CartList;
