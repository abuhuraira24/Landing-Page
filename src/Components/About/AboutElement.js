import styled from "styled-components";

export const AboutWrapper = styled.div`
  padding: 128px 0;
  background: #f4f6fc;
`;

export const Cart = styled.div`
  max-width: ${(props) => props.w}%;
  padding: 0 10px;
  @media (max-width: 668px) {
    max-width: 100%;
    margin-bottom: 1rem;
  }
`;
export const CartIcon = styled.span`
  svg {
    color: #4287f5;
    font-size: 36px;
  }
`;
export const Image = styled.img`
  max-width: 50px;
  margin-bottom: 1rem;
`;
export const CartH4 = styled.h4`
  font-size: 24px;
  margin: 9px 0px 22px;
  color: #242424;
  font-weight: 500;
`;
export const CartP = styled.p`
  font-size: 16px;
  color: #282938b5;
  font-weight: 400;
  line-height: 1.625;
`;

export const H2 = styled.h2``;

export const Link = styled.a`
  color: #2405f2;
  font-weight: 500;
  display: inline-block;
  cursor: pointer;
  &&:hover {
    color: #2405f2;
  }
  @media (max-width: 991px) {
    margin-bottom: 2rem;
  }
`;
