import styled, { css } from 'styled-components';

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
    justify-content: center;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`;

export const ListContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${theme.spacings.xsmall};
    justify-content: center;
  `}
`;
