import React from 'react';
import useCart from 'hooks/useCart';
import CartListItem from 'components/ui/CartListItem';
import { currencyFormatter } from 'utils/currencyFormatter';
import * as S from './styles';
import Button from 'components/generics/Button';
import { Link } from 'react-router-dom';

const CartList = () => {
  const { cartItems, subtotal, clearCart, changeCartVisibility } = useCart();

  return (
    <S.Wrapper>
      {!!cartItems.length && (
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
            <Link to="/cart">
              <Button
                fullwidth
                btntype="primary"
                onClick={() => changeCartVisibility(false)}
              >
                CHECKOUT
              </Button>
            </Link>
            <Button fullwidth onClick={clearCart}>
              CLEAR
            </Button>
          </S.ActionWrapper>
        </>
      )}
    </S.Wrapper>
  );
};

export default CartList;
