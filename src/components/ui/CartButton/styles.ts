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

    > svg {
      color: ${theme.colors.gray};
    }
  `}
`;

export const CartCount = styled.p<{ isVisible: boolean }>`
  ${({ theme, isVisible }) => css`
    color: ${theme.colors.white};
    opacity: ${isVisible ? 1 : 0};
    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius.full};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
  `}
`;

export const CartListWrapper = styled.div<{ visible: boolean }>`
  ${({ theme, visible }) => css`
    position: absolute;
    right: 0;
    transition: ${theme.transition.default};
    max-height: ${visible ? '60rem' : '0'};
    overflow: hidden;
  `}
`;
