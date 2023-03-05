import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #000;
  min-height: 15rem;
  width: 100%;
  padding-top: 1rem;
  padding: 1rem;
  display: flex;
  gap: 5rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  svg {
    color: #b5b5b5;
  }
`;
