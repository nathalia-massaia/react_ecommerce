import Footer from 'components/structure/Footer';
import Header from 'components/structure/Header';
import * as S from './styles';

type BaseProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <S.HeaderWrapper>
      <Header />
    </S.HeaderWrapper>
    <S.ContentWrapper>{children}</S.ContentWrapper>
    <S.FooterWrapper>
      <Footer />
    </S.FooterWrapper>
  </S.Wrapper>
);

export default Base;
