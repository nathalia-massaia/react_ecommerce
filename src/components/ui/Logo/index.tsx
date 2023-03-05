import { Link } from 'react-router-dom';
import * as S from './styles';

type LogoProps = {
  width: number;
  height: number;
};

const Logo = ({ width, height }: LogoProps) => (
  <S.Wrapper>
    <Link to="/">
      <img
        src="https://placehold.jp/000/ffffff/400x100.png?text=Logo"
        width={width}
        height={height}
        alt="logo"
      />
    </Link>
  </S.Wrapper>
);

export default Logo;
