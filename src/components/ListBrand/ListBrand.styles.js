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
  margin: 0 8px;
  background: var(--gray);
  width: 100%;
  height: 120px;
  align-items: center;
  justify-content: center;
`;

export const ImgCard = styled.img`
  max-width: 50%;
  height: 55px;
  :hover {
    max-width: 60%;
    height: 70px;
  }
  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
