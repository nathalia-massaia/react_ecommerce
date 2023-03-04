import media from 'styled-media-query';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;

  ${media.lessThan('medium')`
    justify-content: center
  `}
`;
