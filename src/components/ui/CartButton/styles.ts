import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${theme.spacings.medium};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const ButtonWrapper = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div``;

export const CartCount = styled.p``;

export const CartListWrapper = styled.div`
  position: absolute;
  right: 0;
`;
