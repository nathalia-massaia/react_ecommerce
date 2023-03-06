import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.deepblack};
    height: 15rem;
    width: 100%;
    display: flex;
    gap: 5rem;
    position: relative;
  `}
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
