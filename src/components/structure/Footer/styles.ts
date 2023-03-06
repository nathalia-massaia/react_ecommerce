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

    color: #b5b5b5;
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
  border: 0;
  background-color: #fff;
  color: #2a2a2a;
  width: 100%;
  border-radius: 1rem;
  height: 3.5rem;
  padding: 10px;
  margin-top: 1rem;
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
    gap: 2rem;

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
