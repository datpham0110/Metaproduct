import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--white);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
  height: 100px;
  padding: 20px 0;
  margin: 0 auto;
  flex-direction: row;
`;
export const Card = styled.div`
  display: flex;
  margin: 20px;
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ImgCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
