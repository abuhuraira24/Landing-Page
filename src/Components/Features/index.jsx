import { FeaturesTitle, FeaturesWrapper, SubTitle, Title } from "./FeaturesElements";

import {Cart,Col, CartH4, CartIcon, CartP, Container,Row,Image} from "../Utils/Elements";


import user from '../Features/user.png'

import mark from '../Features/mark.png'

import rule from '../Features/rule.png'

import Vector from '../Features/Vector.png'

import qs from '../Features/qs.png'

import write from '../Features/write.png'

const Features = () => {
    return (
        <FeaturesWrapper>
            <Container>
               <Row>
                   <Col w="100">
                   <FeaturesTitle>
                       <SubTitle>Features</SubTitle>
                       <Title>
                           Design that solves problems, one product at a time
                        </Title>
                   </FeaturesTitle>
                   </Col>
               </Row>
            </Container>
            <Container>
                <Row>
                    <Col w="33.33" md="50" sm="100">
                        <Cart bg="#FFFFFF" p="2"> 
                           <CartIcon>
                              <Image src={user} alt="user"/>
                           </CartIcon>
                           <CartH4>Uses Client First</CartH4>
                            <CartP>
                               Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. 
                            </CartP>
                        </Cart>
                    </Col>
                    <Col w="33.33" md="50" sm="100">
                    <Cart bg="#FFFFFF" p="2"> 
                           <CartIcon>
                              <Image src={mark} alt="mark"/>
                           </CartIcon>
                           <CartH4>Two Free Revision Round</CartH4>
                            <CartP>
                               Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. 
                            </CartP>
                        </Cart>
                    </Col>
                    <Col w="33.33" md="50" sm="100">
                    <Cart bg="#FFFFFF" p="2"> 
                           <CartIcon>
                              <Image src={rule} alt="rule"/>
                           </CartIcon>
                           <CartH4>Template Customization</CartH4>
                            <CartP>
                               Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. 
                            </CartP>
                        </Cart>
                    </Col>
                    <Col w="33.33" md="50" sm="100">
                    <Cart bg="#FFFFFF" p="2"> 
                           <CartIcon>
                              <Image src={qs} alt="qs"/>
                           </CartIcon>
                           <CartH4>24/7 Support</CartH4>
                            <CartP>
                               Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. 
                            </CartP>
                        </Cart>
                    </Col>
                    <Col w="33.33" md="50" sm="100">
                    <Cart bg="#FFFFFF" p="2"> 
                           <CartIcon>
                              <Image src={Vector} alt="Vector"/>
                           </CartIcon>
                           <CartH4>Quick Delivery</CartH4>
                            <CartP>
                               Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. 
                            </CartP>
                        </Cart>
                    </Col>
                    <Col w="33.33" md="50" sm="100">
                    <Cart bg="#FFFFFF" p="2"> 
                           <CartIcon>
                              <Image src={write} alt="write"/>
                           </CartIcon>
                           <CartH4>Hands-on approach</CartH4>
                            <CartP>
                               Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. 
                            </CartP>
                        </Cart>
                    </Col>
                </Row>
            </Container>
        </FeaturesWrapper>
    );
}



export default Features;