import styled from "styled-components";

export const CoverImage = styled.div`
  background: var(--white);
  height: 300px;
  align-items: center;
  justify-content: center;
  display: flex;
  -webkit-box-shadow: 3px 3px 15px 3px rgba(0, 0, 0, 0.09);
  box-shadow: 3px 3px 15px 3px rgba(0, 0, 0, 0.09);
  border-radius: 8px;
`;

export const Image = styled.img`
  width: 80%;
  max-width: 720px;
  transition: all 0.3s;
  border-radius: 20px;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
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
