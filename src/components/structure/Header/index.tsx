import Logo from 'components/ui/Logo';
import { Cart as CartIcon } from '@styled-icons/icomoon/Cart';

import * as S from './styles';

const Header = () => (
  <S.Wrapper>
    <S.CopyrightWrapper>
      <p>© 2023 All rights reserved</p>
      <p>|SAFODA LISBON</p>
    </S.CopyrightWrapper>
    <Logo width={400} height={100} />
    <S.IconWrapper>
      <CartIcon size={30} color="white" />
    </S.IconWrapper>
  </S.Wrapper>
);

export default Header;
