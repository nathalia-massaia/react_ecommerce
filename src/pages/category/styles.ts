import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  color: #ffffff;
`;

export const Title = styled.div`
  width: 800px;
  padding: 1rem 0;
  border-top: 0.1rem solid #b5b5b5;

  a {
    text-decoration: none;
    color: #fff;
  }

  h1 {
    color: #daa520;
  }
`;

export const SelectWrapper = styled.div`
  color: #757575;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 800px;
`;
export const SelectContent = styled.select`
  color: #757575;
  background-color: transparent;
  border: none;
`;
