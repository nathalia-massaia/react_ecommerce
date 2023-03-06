import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};
    flex-direction: column;
  `}
`;

export const CartInfoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.medium};
  `}
`;

export const CartListWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    flex: 2;
    border-radius: ${theme.border.radius.rounded};
    padding: ${theme.spacings.xsmall};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    text-transform: uppercase;
    padding-bottom: ${theme.spacings.xsmall};
    border-bottom: 0.1rem solid ${theme.colors.primary};
    color: ${theme.colors.primary};
  `}
`;

export const CartItems = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    max-height: 40rem;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 0;
    }
  `}
`;

export const EmptyMessage = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.darkgray};
  `}
`;

export const OrderResumeWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius.rounded};
    padding: ${theme.spacings.xsmall};
    flex: 1;
    max-height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${OrderResumeItem}:last-child {
      padding-top: ${theme.spacings.xsmall};
      border: none;
    }
  `}
`;

export const OrderResumeItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkgray};
    border-bottom: 0.1rem solid ${theme.colors.gray};
    padding-bottom: ${theme.spacings.xsmall};

    > strong {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;
