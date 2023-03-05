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

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const CartCount = styled.p<{ isVisible: boolean }>`
  ${({ theme, isVisible }) => css`
    color: ${theme.colors.gray};
    transition: ${theme.transition.fast};
    opacity: ${isVisible ? 1 : 0};
  `}
`;

export const CartListWrapper = styled.div`
  position: absolute;
  right: 0;
`;
