import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const BreadcrumbWrapper = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.darkgray};
    width: 100%;
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const BreadcrumbLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.darkgray};
    transition: ${theme.transition.default};
    text-decoration: none;

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`;

export const BreadcrumbSeparator = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.darkgray};
    margin: 0 ${theme.spacings.xxsmall};
  `}
`;
