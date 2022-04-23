import styled from "styled-components";

export const CoverWrapper = styled.div`
  background: #1c1e53;
  @media (max-width: 991px) {
    height: 900px;
  }
  @media (min-width: 991px) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const CoverContainer = styled.div`
  max-width: 1140px;
  height: 720px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1200px) {
    padding: 0 4rem;
  }
`;

export const CoverContent = styled.div`
  z-index: 9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10rem;

  @media (max-width: 991px) {
    flex-direction: column-reverse;
  }
`;

export const CoverH3 = styled.h1`
  font-size: 44px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 2rem;
  @media (max-width: 991px) {
    margin-top: 4rem;
  }
  @media (max-width: 468px) {
    font-size: 34px;
  }
`;

export const CoverP = styled.p`
  color: #fff;
  margin-bottom: 2rem;
`;

export const Text = styled.div`
  max-width: 480px;
`;

export const CoverImage = styled.div`
  @media (max-width: 991px) {
    margin-top: 4rem;
  }
  img {
    animation: shapeani3 5s linear infinite;
  }
  @keyframes shapeani3 {
    0% {
      transform: translateY(15px);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(15px);
    }
  }
`;
export const Image = styled.img`
  max-width: 80%;
  margin-left: 10rem;
  @media (max-width: 991px) {
    margin-left: 0;
    max-width: 100%;
  }
  @media (max-width: 468px) {
    max-width: 100%;
    margin-left: 0rem;
  }
`;

export const ButtonWrapper = styled.div``;
