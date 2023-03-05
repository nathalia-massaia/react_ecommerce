import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${theme.spacings.medium};
    cursor: pointer;
  `}
`;
