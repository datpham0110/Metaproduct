import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--white);
  padding: 0 20px;
  margin-top: 50px;
`;

export const Content = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  flex-direction: row;
  h2 {
    color: "black";
  }
  p {
    color: "black";
  }
`;
export const InfoCompany = styled.div`
  flex-direction: column;
  margin: 0 0;
  max-width: 400px;
`;
export const MenuPro = styled.div`
  flex-direction: column;
  margin: 0 20px;
`;

export const ImgThienLongOne = styled.img`
  width: 200px;
  height: 126;
`;
