import styled from "styled-components";

export const Nav = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  transition: 0.5s;
  @media (max-width: 991px) {
    z-index: 99;
  }
  background: #1c1e53;
  box-shadow: ${(props) =>
    props.issticky ? "0px 5px 20px rgb(0 0 0 / 15%)" : null};
  position: ${(props) => (props.issticky ? "fixed" : "absolute")};
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  margin: auto;
  height: 80px;
  position: relative;
  @media (max-width: 1200px) {
    max-width: 960px;
    padding: 0px 28px;
  }
`;

export const NavLogo = styled.a`
  font-size: 32px;
  font-weight: 600;
  color: ${(props) => (props.issticky ? "#000" : "#fff")};
  @media (max-width: 991px) {
    color: #23255c;
  }
`;
export const Image = styled.img``;

export const MenuIcon = styled.span`
  display: none;
  @media (max-width: 991px) {
    display: block;
    svg {
      font-size: 28px;
      transition: 0.5s;
      color: #fff;

      @media (max-width: 991px) {
        margin-left: 1rem;
      }
    }
  }
`;

export const NavbarMenu = styled.ul`
  margin-top: 1rem;

  @media (max-width: 991px) {
    width: 100%;
    position: absolute;
    left: 0;
    top: 100%;
    background: #1c1e53;
    /* height: 260px; */
    height: ${(props) => (props.toggle ? "260px" : "0px")};
    overflow: scroll;
    z-index: 99999999 !important;
    transition: 0.5s;
    li {
      a {
        color: #fff;
      }
    }
  }
`;

export const NavItem = styled.li`
  display: inline-block;
  @media (max-width: 991px) {
    display: block;
  }
`;

export const NavLink = styled.a`
  font-size: 16px;
  margin-left: 2rem;
  font-weight: 300;
  color: #fff;
  @media (max-width: 991px) {
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: large;
  }
`;
