import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0;
    border-bottom: 0.1rem solid ${theme.colors.lightgray};
    position: relative;
    display: flex;
    gap: ${theme.spacings.xsmall};
  `}
`;

export const ImageWrapper = styled.div`
  width: 8rem;
  height: 10rem;
  display: flex;
  align-items: center;
  flex: 1;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductCount = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    width: 2rem;
    height: 2rem;
    border-radius: ${theme.border.radius.full};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    position: absolute;
    top: 1.38rem;
    left: 0;
  `}
`;

export const DescriptionWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    flex: 2;
  `}
`;

export const TitleWrapper = styled.div``;

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    padding-right: ${theme.spacings.xxsmall};
  `}
`;

export const Brand = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `}
`;

export const Price = styled.div``;

export const ActionWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    gap: ${theme.spacings.small};

    button {
      border: none;
      outline: none;
      box-shadow: none;
      background: none;
      cursor: pointer;

      > svg {
        color: ${theme.colors.darkgray};
      }
    }
  `}
`;

export const QuantityHandlerWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};

    > button {
      border: 0.1rem solid ${theme.colors.lightgray};
      padding: ${theme.spacings.xxsmall};
      border-radius: ${theme.border.radius.rounded};
    }
  `}
`;
