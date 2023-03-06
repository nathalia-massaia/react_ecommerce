import { Link } from 'react-router-dom';
import * as S from './styles';

type LogoProps = {
  width: number;
  height: number;
};

const Logo = ({ width, height }: LogoProps) => (
  <S.Wrapper>
    <Link to="/">
      <img src="/img/logo.png" width={width} height={height} alt="logo" />
    </Link>
  </S.Wrapper>
);

export default Logo;
