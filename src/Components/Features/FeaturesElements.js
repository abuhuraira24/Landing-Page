import styled from "styled-components";

export const FeaturesWrapper = styled.div`
  padding: 128px 0;
  background: #f4f6fc;
`;

export const FeaturesTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const SubTitle = styled.h6`
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  max-width: 630px;
  text-align: center;
  font-size: 48px;
  font-weight: 600;
  @media (max-width: 991px) {
    font-size: 38px;
  }
  @media (max-width: 668px) {
    font-size: 22px;
  }
`;
