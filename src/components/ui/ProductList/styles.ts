import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 65%;
  margin: 2rem auto;
  padding: 1rem 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

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
  justify-content: center;
  gap: 20px;

  a {
    text-decoration: none;
  }
`;
