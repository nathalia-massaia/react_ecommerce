import styled, { css } from 'styled-components';

export const DescriptionWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    padding: ${theme.spacings.xxsmall};
    text-transform: uppercase;
    transition: ${theme.transition.default};

    p {
      word-break: break-word;
      line-height: 1.2;
    }
  `}
`;

export const ProductTitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.darkgray};
    font-weight: ${theme.font.bold};
    display: flex;
    justify-content: space-between;
  `}
`;

export const PriceContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.darkgray};
    text-align: right;
    font-weight: ${theme.font.bold};
    padding-top: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const DescriptionContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 25rem;
    position: relative;
    overflow: hidden;
    border-top-left-radius: ${theme.border.radius.rounded};
    border-top-right-radius: ${theme.border.radius.rounded};

    img {
      transition: all 0.2s ease-in-out;
      object-fit: cover;
      width: 100%;
      height: 100%;

      &:hover {
        transform: scale(1.1);
      }
    }
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    position: absolute;
    text-align: center;
    bottom: ${theme.spacings.xxsmall};
    width: 100%;
    text-transform: uppercase;
  `}
`;

export const AddToCart = styled.div`
  ${({ theme }) => css`
    border-bottom-left-radius: ${theme.border.radius.rounded};
    border-bottom-right-radius: ${theme.border.radius.rounded};
    overflow: hidden;
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 25rem;
    height: fit-content;
    border-radius: ${theme.border.radius.rounded};
    background-color: ${theme.colors.white};
    transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;

    :hover {
      cursor: pointer;

      ${DescriptionWrapper} {
        background-color: ${theme.colors.deepblack};
        color: ${theme.colors.white};

        & ${PriceContent} {
          color: ${theme.colors.white};
        }
      }
    }
  `}
`;
