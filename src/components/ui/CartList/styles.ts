import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    min-width: 40rem;
    margin-top: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius.rounded};
    max-height: 50rem;
    padding: ${theme.spacings.xsmall};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
    border: 0.1rem solid ${theme.colors.lightgray};
    box-shadow: 0 .4rem 1rem rgba(0, 0, 0, 0.1);

  `}
`;

export const ListWrapper = styled.div`
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const OrderInfoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const OrderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActionWrapper = styled.div`
  ${({ theme }) => css`
    > button {
      background-color: ${theme.colors.primary};
      border: 0;
      outline: none;
      box-shadow: none;
      padding: ${theme.spacings.xsmall};
      color: ${theme.colors.white};
      width: 100%;
      cursor: pointer;
      border-radius: ${theme.border.radius.rounded};
      font-weight: ${theme.font.bold};
      transition: ${theme.transition.default};

      &:hover {
        background-color: ${darken(0.1, theme.colors.primary)};
      }
    }
  `}
`;
