import styled from "styled-components";
import { Container as Contain } from "react-bootstrap";

export const Container = styled(Contain)`
  max-width: 1140px;
  margin: auto;
  margin: ${(props) => (props.margin ? "55px auto" : "auto")};
  position: relative;
  flex-direction: ${(props) => (props.direction === "column" ? "column" : "")};
  @media (max-width: 1200px) {
    max-width: 960px;
    padding: 0px 28px;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: ${(props) => (props.direction ? "row-reverse" : "")};

  @media (max-width: 1200px) {
    flex-direction: ${(props) => props.dir};
  }
`;
export const Col = styled.div`
  max-width: ${(props) => props.w}%;
  position: relative;
  width: 100%;
  /* min-height: 1px; */
  padding-right: 15px;
  padding-left: 15px;
  display: ${(props) => (props.center ? "flex" : "")};
  flex-wrap: ${(props) => props.flex};

  @media (max-width: 991px) {
    max-width: ${(props) => props.md}%;
    flex-direction: ${(props) => (props.directionColum ? "column" : "")};
  }
  @media (max-width: 768px) {
    max-width: ${(props) => props.sm}% !important;
  }
`;
export const Button = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => props.colur};
  padding: 0.8rem 2rem;
  border-radius: 41px;
  position: relative;
  z-index: 9;
  transition-delay: 2s;
  transition: width 2s;
  font-weight: 500;
  margin-top: ${(props) => props.mt}rem;
  border: 1px solid #dddddd38;
  @media (max-width: 991px) {
    margin-left: ${(props) => props.ml};
  }
`;

// Card

export const Cart = styled.div`
  max-width: ${(props) => props.w}%;
  padding: 0 10px;
  background: ${(props) => props.bg};
  padding: ${(props) => props.p}rem;
  margin-bottom: 2rem;
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
  font-size: 22px;
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
  cursor: pointer;
  &&:hover {
    color: #2405f2;
  }
  @media (max-width: 991px) {
    margin-bottom: 5rem;
  }
`;
