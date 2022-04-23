import styled from "styled-components";

export const FaqWrapper = styled.div`
  padding: 128px 0;
`;

export const H2 = styled.h2`
  font-weight: 600;
  font-size: 38px;
  line-height: 56px;
  margin-bottom: 1rem;
  @media (max-width: 991px) {
    margin-bottom: 2rem;
  }
`;

export const Link = styled.a`
  font-weight: 500;
  font-size: 14px;
  @media (max-width: 991px) {
    margin-bottom: 2rem;
    display: inline-block;
  }
  &&:hover {
    color: #000;
  }
`;

export const Accordions = styled.div``;

export const H5 = styled.h5`
  color: #282938;
  margin-left: 3rem;
  @media (max-width: 557px) {
    font-size: 16px;
  }
`;

export const Span = styled.span`
  color: #2405f2;
  font-weight: 500;
  font-size: 24px !important;
`;
