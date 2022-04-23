import { ContractInfo, ContractWrapper, ImageContainer, H3, Text, H4, Form, Input } from "./ContractElements";

import {Container, Row, Col, Button} from "../Utils/Elements"

import writing from "../Contract/writing.png"
const Contarct = () => {
    return (
        <ContractWrapper>
            <Container>
                <Row>
                    <Col w="100" center="true" directionColum="true">
                        <ImageContainer w="50" md="100" bg={writing}>
                           <H3>Building stellar websites for early startups</H3>
                           <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</Text>
                        </ImageContainer>
                        <ContractInfo w="50" md="100">
                          <H4>Send inquiry</H4>
                          <Text>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                          </Text>
                          <Form>
                              <Input placeholder="Your Name"/>
                              <Input placeholder="Email"/>
                              <Input placeholder="Paste your Figma design URL"/>
                              <Button mt="2" color="#1B1C2B" bg=" #FCD980;">Send an Inquiry</Button>
                          </Form>
                        </ContractInfo>
                    </Col>
                </Row>
            </Container>
        </ContractWrapper>
    );
}


export default  Contarct 
    