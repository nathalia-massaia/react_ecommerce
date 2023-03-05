import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    color: #daa520;
    font-size: 30px;
    font-weight: initial;
    padding-bottom: 3rem;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;

  a {
    text-decoration: none;
  }
`;
