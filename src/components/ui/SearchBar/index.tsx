import * as S from './styles';
import { Search as SearchIcon } from '@styled-icons/ionicons-outline/Search';

const SearchBar = () => (
  <S.Wrapper>
    <S.Input type="text" placeholder="Search" />

    <S.IconWrapper>
      <SearchIcon size={18} />
    </S.IconWrapper>
  </S.Wrapper>
);

export default SearchBar;
