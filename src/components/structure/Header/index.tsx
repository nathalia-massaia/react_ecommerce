import { Cart as CartIcon } from '@styled-icons/icomoon/Cart';

import * as S from './styles';

const Header = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <CartIcon size={60} color="white" />
    </S.IconWrapper>
  </S.Wrapper>
);

export default Header;
