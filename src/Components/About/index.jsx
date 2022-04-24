import { Col, Container, Row } from "../Utils/Elements";
import { AboutWrapper, Cart, CartH4, CartIcon, CartP, H2, Image, Link } from "./AboutElement";
import one from "../About/one.png"
import two from "../About/two.png"
import three from "../About/three.png"
import four from "../About/four.png"

const About = () => {
    return (
        <AboutWrapper id="about">
            <Container>
                <Row>
                    <Col w='40' md="991" mb-md-4>
                        <H2>How we work</H2>
                        <CartP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </CartP>
                        <Link >Get in touch with us →</Link>
                    </Col>
                    <Col w='60' md="991" center="flex" flex="wrap">
                        <Cart w="50">
                            <CartIcon>
                                <Image src={one} alt="one"/>
                            </CartIcon>
                            <CartH4>Strategy</CartH4>
                            <CartP>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</CartP>
                        </Cart>
                        <Cart w="50">
                            <CartIcon>
                                <Image src={two} alt="two"/>
                            </CartIcon>
                            <CartH4>Wireframing</CartH4>
                            <CartP>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</CartP>
                        </Cart>
                        <Cart w="50">
                            <CartIcon>
                                <Image src={three} alt="two"/>
                            </CartIcon>
                            <CartH4>Design</CartH4>
                            <CartP>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</CartP>
                        </Cart>
                        <Cart w="50">
                            <CartIcon>
                                <Image src={four} alt="four"/>
                            </CartIcon>
                            <CartH4>Development</CartH4>
                            <CartP>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</CartP>
                        </Cart>
                    </Col>
                </Row>
            </Container>
        </AboutWrapper>
    );
}


export default About;