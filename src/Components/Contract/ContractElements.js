import styled from "styled-components";

export const ContractWrapper = styled.div`
  padding: 128px 0;
`;

export const ImageContainer = styled.div`
  background: url(${(props) => props.bg});
  background-size: cover;
  width: ${(props) => props.w}%;
  padding: 5rem 2rem;
  position: relative;
  z-index: 9;
  @media (max-width: 991px) {
    width: ${(props) => props.md}%;
  }
  &&::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(28, 30, 83, 0.5);
    z-index: -1;
  }
`;

export const ContractInfo = styled.div`
  width: ${(props) => props.w}%;
  background: #1c1e53;
  padding: 96px;
  @media (max-width: 991px) {
    width: ${(props) => props.md}%;
    padding: 30px;
  }
`;

export const H3 = styled.h3`
  color: #fff;
  font-weight: 600;
  margin-bottom: 2rem;
  font-size: 39px;
  line-height: 66px;
`;

export const Text = styled.p`
  color: #fff;
  line-height: 28px;
  font-size: 13px;
  margin-bottom: 2rem;
`;

export const H4 = styled.h4`
  color: #fff;
  margin-bottom: 2rem;
`;

export const Form = styled.form``;

export const Input = styled.input`
  background: transparent;
  border: none;
  color: #f4f6fc;
  border: 1.5px solid rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  width: 100%;
  transition: 0.5s;
  input:focus {
    border: 1.5px solid rgba(255, 255, 255, 0.05) !important;
  }
`;
