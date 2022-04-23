import { ContactInfo, Copy, Email, FooterManu, Footerr, H4, H6, Logo,Ul, P, Phone, RightContent, Text, Li } from "./FooterElements";
import Logoo from "../Footer/Logo.png"
import {Container, Row, Col} from "../Utils/Elements"

const Footer = () => {
    return (
        <Footerr>
            <Container>
                <Row>
                    <Col w="50" md="100">
                      <Logo src={Logoo} alt=""/>
                      <Text>
                      We are always open to discuss your project and improve your online presence.
                      </Text>
                      <ContactInfo>
                          <Email>
                              <H6>Email me at</H6>
                              <P>contact@website.com</P>
                          </Email>
                          <Phone>
                              <H6>Call us</H6>
                              <P>0927 6277 28525</P>
                          </Phone>
                      </ContactInfo>
                    </Col>
                    <Col w="50"  md="100">
                        <RightContent>
                         <H4>Lets Talk!</H4>
                            <Text>
                            We are always open to discuss your project and improve your online presence.
                            </Text>   
                        </RightContent>
                      
                    </Col>
                </Row>
                
            </Container>
            <FooterManu>
                <Container>
                    <Row dir="column-reverse">
                        <Col w="40" md="100">
                        <Copy>Copyright 2022, Finsweet.com</Copy>
                        </Col>
                        <Col w="60" md="100">
                            <Ul>
                               <Li>Home</Li>
                               <Li>About us</Li>
                               <Li>Features</Li>
                               <Li>Pricing</Li>
                               <Li>FAQ</Li>
                               <Li>Blog</Li>
                            </Ul>
                        </Col>
                    </Row>
                </Container>
            </FooterManu>
        </Footerr>
    );
}


export default Footer;