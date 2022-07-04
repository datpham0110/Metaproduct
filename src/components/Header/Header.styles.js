import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--white);
  /* padding: 0 100px; */
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* max-width: var(--maxWidth); */
  padding: 20px 0;
  margin: 0 auto;
  color: var(--white);
  a {
    color: var(--white);
    text-decoration: none;
  }
`;

export const LogoImg = styled.img`
  width: 150px;
  @media screen and (max-width: 500px) {
    width: 100px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 80px;
  } ;
`;

export const ListMenu = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
`;

export const TxtMenu = styled.div`
  /* col(or: var(--darkGrey); */
  color: var("rgb(16 91 170)");
  margin: 0 20px;
  align-items: center;
  display: flex;
  h5: {
    color: var(--darkGrey);
    margin: 6px 0;
    text-align: center;
  }
`;

export const CoverListIcon = styled.div`
  flex-direction: row;
  display: flex;
`;

export const CoverIcon = styled.div`
  background: var(--color2);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0 10px;
`;

export const CoverIconSearch = styled.div`
  background: var(--gray);
  width: 500px;
  height: 50px;
  /* border-radius: 50%; */
  border-radius: 25px;
  align-items: center;
  display: flex;
  margin: 0 10px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  color: var(--medGrey);
  border: 1 solid var(--color2);
  p: {
    color: "black";
  }
`;
