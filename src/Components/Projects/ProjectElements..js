import styled from "styled-components";

export const ProjectWrapper = styled.div`
  padding: 128px 0;
`;

export const ProjectTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Left = styled.div``;

export const Right = styled.div``;

export const Title = styled.h5`
  font-size: 28px;
  color: #282938;
  font-weight: 600;
`;

export const ViewH6 = styled.h6`
  color: #282938;
  cursor: pointer;
  color: ${(props) => props.color};
`;

export const LeftContent = styled.div`
  background: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
  position: relative;
  height: 600px;
  @media (max-width: 991px) {
    margin-bottom: 3rem;
  }
`;
export const CardWrapper = styled.div`
  max-width: ${(props) => props.w}%;
  background: linear-gradient(
    329.39deg,
    #1c1e53 -10.96%,
    rgba(28, 30, 83, 0.42) 103.96%
  );
  height: 100%;
  display: flex;
  align-items: end;
  padding: 3rem 2rem;
  @media (max-width: 668px) {
    max-width: ${(props) => props.md}%;
  }
`;
export const Caption = styled.div``;

export const CaptionTitle = styled.h6`
  font-size: 20px;
  color: #fff;
  line-height: 36px;
  cursor: pointer;
`;
export const SubTitle = styled.p`
  font-size: 14px;
  color: #fff;
  line-height: 28px;
`;

export const RighttContent = styled.div`
  background: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
  position: relative;
  margin-bottom: 1rem;
  height: 50%;
  @media (max-width: 991px) {
    margin-bottom: 3rem;
  }
`;
export const Image = styled.div`
  height: 100%;
  @media (max-width: 991px) {
    margin-bottom: 25rem;
  }
`;

export const Img = styled.img`
  width: 100%;
`;
