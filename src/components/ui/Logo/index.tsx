import * as S from './styles';

type LogoProps = {
  width: number;
  height: number;
};

const Logo = ({ width, height }: LogoProps) => (
  <S.Wrapper>
    <img src="/img/Safoda.png" width={width} height={height} alt="logo" />
  </S.Wrapper>
);

export default Logo;
