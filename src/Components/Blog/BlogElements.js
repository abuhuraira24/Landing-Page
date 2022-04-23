import styled from "styled-components";

export const BlogWrapper = styled.div`
  padding: 128px 0;
`;

export const H4 = styled.h4`
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 4rem;
  @media (max-width: 768px) {
    font-size: 38px;
  }
`;

export const BlogCart = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 40px;
  cursor: pointer;
`;

export const Span = styled.span`
  color: #282938;
  font-size: 16px;
  font-weight: 500;
`;

export const H5 = styled.h4`
  font-weight: 500;
  line-height: 36px;
  font-size: 24px;
  margin: 16px 0;
  cursor: pointer;
  @media (max-width: 991px) {
    font-size: 20px;
  }
`;

export const Text = styled.p``;

export const Link = styled.a`
  color: #282938;
  cursor: pointer;
  &&:hover {
    color: #282938;
  }
`;
