import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #000;
  width: 100%;
  padding-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  gap: 5rem;
`;
export const CopyrightWrapper = styled.div`
  display: flex;
  color: #b5b5b5;
  font-size: 14px;
  text-align: left;
  flex-direction: column;
  align-items: flex-end;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: #b5b5b5;
  }
`;

// position: fixed!important;
// z-index: 101;
// width: 100%;
// min-width: 768px;
