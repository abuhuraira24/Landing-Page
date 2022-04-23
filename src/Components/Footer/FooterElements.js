import styled from "styled-components";

export const Footerr = styled.footer`
  background: #1c1e53;
  padding-top: 8rem;
`;

export const Logo = styled.img`
  cursor: pointer;
  margin-bottom: 2rem;
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 4rem;
`;

export const ContactInfo = styled.div`
  background: #fcd980;
  display: flex;
  padding: 18px 37px;
`;
export const Email = styled.div`
  width: 50%;
`;
export const Phone = styled.div`
  width: 50%;
`;
export const H6 = styled.h6``;
export const P = styled.h6``;

export const H4 = styled.h4`
  color: #fff;
  color: 48px;
  font-weight: 600;
  margin-bottom: 3rem;
`;

export const RightContent = styled.div`
  margin-left: 4rem;
  @media (max-width: 991px) {
    margin-left: 0;
    margin-top: 2rem;
  }
`;

export const Copy = styled.p`
  font-weight: 500;
  line-height: 38px;
  @media (max-width: 991px) {
    text-align: center;
  }
`;

export const FooterManu = styled.div`
  background: #fff;
  display: flex;
  padding: 1rem 0;
`;

export const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: end;
  line-height: 38px;
  list-style: none;
  @media (max-width: 991px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Li = styled.li`
  margin-left: 2rem;
  cursor: pointer;
`;
