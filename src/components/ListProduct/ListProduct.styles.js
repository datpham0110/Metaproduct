import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 80px auto;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 2rem;
  margin-top: 30px;
`;
export const ImageList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
export const CoverBtn = styled.div`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  display: flex;
  margin-top: 30px;
`;
export const BtnSeeMore = styled.div`
  width: 200px;
  height: 40px;
  background: var(--orange);
  align-items: center;
  justify-content: center;
  display: flex;
  p {
    padding: 0;
    margin: 0 0;
  }
`;
