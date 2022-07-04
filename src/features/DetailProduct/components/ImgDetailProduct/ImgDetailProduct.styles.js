import styled from "styled-components";
export const Wrapper = styled.div`
  background: var(--white);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
  margin: 0 auto;
  flex-direction: column;
`;
export const ImageBig = styled.img`
  width: 400px;
  height: 500px;
`;
export const LstImgSub = styled.div`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20;
  display: flex;
`;
export const ImageSub = styled.img`
  width: 150px;
  height: 100px;
  background: var(--gray);
  margin: 10px;
`;
