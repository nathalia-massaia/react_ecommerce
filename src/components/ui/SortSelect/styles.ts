import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.gray};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const SelectContent = styled.select`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    background-color: transparent;
    border: none;
    cursor: pointer;
  `}
`;
