import CartButton from 'components/ui/CartButton';
import Logo from 'components/ui/Logo';

import * as S from './styles';

const Header = () => (
  <S.Wrapper>
    <Logo width={400} height={100} />
    <CartButton />
  </S.Wrapper>
);

export default Header;
