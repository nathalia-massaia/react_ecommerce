import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  height: 2rem;
  position: relative;
`;

export const IconWrapper = styled.div`
  padding: 0 0.5rem;
  width: fit-content;
  top: 50%;
  transform: translateY(-38%);
  position: absolute;
  height: 100%;
  background-color: #000;
  border: none;
  right: 0;
  display: flex;
  align-items: center;

  svg {
    color: #fff;
  }
`;

export const Input = styled.input`
  padding: 0 0.5rem;
  padding-right: 2.5rem;
  height: 100%;
`;
