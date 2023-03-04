import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #fff;
`;

export const AccordionTitleWrapper = styled.div`
  padding: 0 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  color: #ff9800;
  cursor: pointer;
`;
export const AccordionContentWrapper = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => css`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    color: #2a2a2a;
    background-color: #fff;
    text-align: left;
    font-size: 14px;
    transition: all 0.4s;
    max-height: ${!isOpen ? '0' : '20rem'};
    margin-top: ${!isOpen ? '0' : 'auto'};
    overflow: ${!isOpen ? 'hidden' : 'auto'};
    padding: ${!isOpen ? '0 2rem' : '1rem 2rem'};
  `}
`;

export const IconWrapper = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => css`
    svg {
      transition: all 0.3s;
      transform: ${isOpen ? 'rotate(180deg)' : ''};
    }
  `}
`;
