import styled from 'styled-components';

export const DescriptionWrapper = styled.div`
  color: #b5b5b5;
  padding: 1rem;
  font-size: 14px;
  font-weight: initial;
  text-transform: uppercase;
  transition: all 0.2s ease 0s;
  display: grid;
  grid-template-columns: 2fr 1fr;
  min-height: 110px;
  gap: 0.4rem;

  p {
    word-break: break-word;
    line-height: 1.2;
  }
`;

export const PriceContent = styled.div`
  color: #333;
`;

export const DescriptionContent = styled.div``;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;

  img {
    transition: all 0.2s ease-in-out;
    object-fit: cover;
    width: 100%;
    height: 100%;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Title = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  text-align: center;
  bottom: 1rem;
  width: 100%;
  text-transform: uppercase;
`;

export const Wrapper = styled.div<{ hasDescription: boolean }>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 180px;
  height: fit-content;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  background-color: #fff;
  transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;

  :hover {
    cursor: pointer;

    ${DescriptionWrapper} {
      background-color: #000;
      color: #fff;

      & ${PriceContent} {
        color: white;
      }
    }
  }
`;
