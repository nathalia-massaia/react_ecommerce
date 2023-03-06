import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: auto;
    padding: 0;
    background-color: ${theme.colors.deepblack};
  `}
`;
