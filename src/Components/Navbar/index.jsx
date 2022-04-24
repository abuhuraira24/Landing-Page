import { useEffect, useState } from "react";
import logo from "../Navbar/logo.png"
import { Nav,NavbarContainer, NavbarMenu, NavItem, NavLogo,Image, NavLink, MenuIcon } from "./NavbarElements";
import { FaAlignJustify } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../Utils/Elements";


const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [sticky, setSticky] = useState(false)

    const isOpen = () => {
        setOpen(true)
    }
    const isClose = () => {
        setOpen(false)
    }
    const isHeaderSticky = () => {
       if(window.scrollY >= 400){
           setSticky(true)
       }else{
           setSticky(false)
       }
    }
    useEffect(() => {
    isHeaderSticky()
    })
   
    window.addEventListener('scroll', isHeaderSticky)


    return (
        <>
         <Nav issticky={sticky}>
          <NavbarContainer>
              <NavLogo issticky={sticky} to='/'>
                 
                  <NavItem issticky={sticky}>
                      <NavLink issticky={sticky} to='#'>
                      <Image src={logo} alt="logo" />
                      </NavLink>
                  </NavItem>
              </NavLogo>
              
              <NavbarMenu issticky={sticky} toggle={open}>
                  <NavItem issticky={sticky}>
                      <NavLink issticky={sticky} to='#'>
                          Home
                      </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink issticky={sticky} to="#about">
                          About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink issticky={sticky} to="#pricing">
                          Features
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink issticky={sticky} to="#testimonial">
                          Tstimonial
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink issticky={sticky} to="#faq">
                          FAQ
                      </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink issticky={sticky} to="#blog">
                          Blog
                      </NavLink>
                  </NavItem>
              </NavbarMenu>
              <Button ml="auto" bg="transparent" colur="#fff">Contact us</Button>
              <MenuIcon>
                {open ? <AiOutlineClose onClick={() => isClose()} /> : <FaAlignJustify onClick={() => isOpen()} />}
              </MenuIcon>
          </NavbarContainer>
         </Nav>
        </>
    )
}

export default Navbar