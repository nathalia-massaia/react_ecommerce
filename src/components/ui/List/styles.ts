import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const ListWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`;

export const ListContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacings.xsmall};

    ${media.greaterThan('large')`
      grid-template-columns: repeat(4, 1fr) ;
    `}

    ${media.lessThan('medium')`
      grid-template-columns: repeat(2, 1fr);
    `}
  `}
`;
