import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  background-color: #000;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  font-size: 18px;
  color: #b5b5b5;
`;

export const CopyrightWrapper = styled.div`
  font-size: 14px;
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

export const SocialMediaIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  svg {
    color: #b5b5b5;
  }
`;
export const NewsletterWrapper = styled.div`
  ${({ theme }) => css`
    width: 50rem;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    color: ${theme.colors.primary};
  `}
`;

export const AccordionWrapper = styled.div`
  width: 40%;
`;

export const AccordionItemContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;

  p {
    color: #535353;
    margin-top: 1rem;
  }
`;
