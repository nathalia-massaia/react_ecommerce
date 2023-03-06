import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/generics/Button';
import Breadcrumb from 'components/structure/Breadcrumb';
import useCart from 'hooks/useCart';
import Base from 'templates/Base';
import CartListItem from 'components/ui/CartListItem';
import { currencyFormatter } from 'utils/currencyFormatter';
import * as S from './styles';

const CartPage = () => {
  const { cartItems, subtotal } = useCart();

  return (
    <Base>
      <Breadcrumb />
      <S.Wrapper>
        <S.CartInfoWrapper>
          <S.CartListWrapper>
            <S.Title>Shopping Cart</S.Title>
            <S.CartItems>
              {!cartItems.length ? (
                <S.EmptyMessage>
                  There are no items in your shopping cart
                </S.EmptyMessage>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <CartListItem {...item} />
                  ))}
                </>
              )}
            </S.CartItems>
          </S.CartListWrapper>
          <S.OrderResumeWrapper>
            <div>
              <S.OrderResumeItem>
                {cartItems.length} items
                <strong>{currencyFormatter(subtotal)}</strong>
              </S.OrderResumeItem>
              <S.OrderResumeItem>
                Total (with VAT)
                <strong>{currencyFormatter(subtotal)}</strong>
              </S.OrderResumeItem>
            </div>

            <Button btntype="primary" fullwidth disabled={!cartItems.length}>
              Checkout
            </Button>
          </S.OrderResumeWrapper>
        </S.CartInfoWrapper>

        <Link to="/">
          <Button minimal btntype="primary">
            Back to shopping
          </Button>
        </Link>
      </S.Wrapper>
    </Base>
  );
};

export default CartPage;
