import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.deepblack};
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.small};
    padding: ${theme.spacings.small};
    width: 100%;

    color: ${theme.colors.gray};
  `}
`;

export const CopyrightWrapper = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    align-items: center;

    a {
      color: ${theme.colors.primary};
      cursor: pointer;
    }
  `}
`;

export const InputEmail = styled.input`
  ${({ theme }) => css`
    border: 0;
    background-color: ${theme.colors.white};
    color: ${theme.colors.darkgray};
    width: 100%;
    border-radius: ${theme.border.radius.rounded};
    height: 4.5rem;
    padding: ${theme.spacings.xxsmall};
    margin-top: ${theme.spacings.xxsmall};
  `}
`;

export const SocialMediaWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const SocialMediaIconWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};

    svg {
      color: ${theme.colors.gray};
      transition: ${theme.transition.fast};
      cursor: pointer;

      &:hover {
        color: ${theme.colors.primary};
        transform: scale(1.1);
      }
    }
  `}
`;
export const NewsletterWrapper = styled.div`
  ${({ theme }) => css`
    width: 50rem;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    color: ${theme.colors.primary};

    > div {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const AccordionWrapper = styled.div`
  width: fit-content;
`;
