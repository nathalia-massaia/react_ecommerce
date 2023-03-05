import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const DescriptionWrapper = styled.div`
  color: #b5b5b5;
  padding: 1rem;
  font-size: 14px;
  font-weight: initial;
  text-transform: uppercase;
  transition: all 0.2s ease 0s;
  display: grid;
  grid-template-columns: 2fr 1fr;
  min-height: 110px;
  gap: 0.4rem;

  p {
    word-break: break-word;
    line-height: 1.2;
  }
`;

export const PriceContent = styled.div`
  color: #333;
`;

export const DescriptionContent = styled.div``;

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
    border-radius: ${theme.border.radius.rounded};
    border-radius: ${theme.border.radius.rounded};

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
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  text-align: center;
  bottom: 1rem;
  width: 100%;
  text-transform: uppercase;
`;

export const AddToCart = styled.div`
  ${({ theme }) => css`
    button {
      width: 100%;
      border: 0;
      outline: 0;
      box-shadow: 0;
      padding: ${theme.spacings.xsmall};
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      font-weight: 600;
      cursor: pointer;
      transition: ${theme.transition.default};
      border-bottom-left-radius: ${theme.border.radius.rounded};
      border-bottom-right-radius: ${theme.border.radius.rounded};
    }
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
    background-color: #fff;
    transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;

    :hover {
      cursor: pointer;

      ${DescriptionWrapper} {
        background-color: #000;
        color: #fff;

        & ${PriceContent} {
          color: white;
        }
      }

      button {
        background-color: ${darken(0.1, theme.colors.primary)};
      }
    }
  `}
`;
