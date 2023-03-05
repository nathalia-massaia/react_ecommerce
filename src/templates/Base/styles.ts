import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderWrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: ${theme.layers.base};
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: fit-content;
    margin: 20rem auto 0;
    background-color: ${theme.colors.darkGray};
    border-top: 0.1rem solid ${theme.colors.gray};
    padding: ${theme.spacings.large} 0;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxlarge};

    ${media.greaterThan('medium')`
      max-width: 106rem;
    `}
  `}
`;
