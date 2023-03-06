import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 0.1rem solid ${theme.colors.gray};
  `}
`;

export const AccordionTitleWrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.small};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    color: ${theme.colors.primary};
    cursor: pointer;
  `}
`;
export const AccordionContentWrapper = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    text-align: left;
    transition: ${theme.transition.default};
    max-height: ${!isOpen ? '0' : '20rem'};
    margin-top: ${!isOpen ? '0' : 'auto'};
    overflow: ${!isOpen ? 'hidden' : 'auto'};
    padding: ${!isOpen ? '0 2rem' : '1rem 2rem'};

    ::-webkit-scrollbar {
      width: 0.5rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.gray};
      border-radius: ${theme.border.radius.rounded};
    }
  `}
`;

export const IconWrapper = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    svg {
      transition: ${theme.transition.default};
      transform: ${isOpen ? 'scale(-1)' : ''};
    }
  `}
`;
