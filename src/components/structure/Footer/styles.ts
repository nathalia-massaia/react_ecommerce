import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #000;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;

  p {
    font-size: 16px;
    color: #b5b5b5;
  }
`;

export const InputEmail = styled.input`
  border: 0;
  background-color: #fff;
  color: #2a2a2a;
  width: 30%;
  height: 3.5rem;
  padding: 10px;
`;

export const SocialMediaIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  svg {
    color: #b5b5b5;
  }
`;
export const SubscribeButton = styled.button`
  height: 5rem;
  width: 20%;
  background-color: #ff9800;
  color: white;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: all 0.3s;
  border: 2px solid #ff9800;

  &:hover {
    background-color: #f7d9ab;
    color: #ff9800;
  }
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
