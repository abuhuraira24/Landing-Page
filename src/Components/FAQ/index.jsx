import { Accordions, FaqWrapper, H2, H5, Link, Span } from "./FAQElements";

import {Container, Row, Col} from "../Utils/Elements"

import { Accordion } from "react-bootstrap";

const FAQ = () => {
    return (
        <FaqWrapper>
          <Container>
              <Row>
                  <Col w="40" md="100">
                      <H2>Frequently asked questions</H2>
                      <Link>Contact us for more info</Link>
                  </Col>
                  <Col w="60" md="100">
                    <Accordions>
                        <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <Span>01</Span>
                                <H5> How much time does it take?</H5>
                            </Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <Span>02</Span>
                                <H5> What is your class naming convention?</H5>
                            </Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <Span>03</Span>
                                <H5> What is your class naming convention?</H5>
                            </Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                <Span>04</Span>
                                <H5> What is your class naming convention?</H5>
                            </Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                <Span>05</Span>
                                <H5> What is your class naming convention?</H5>
                            </Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Accordion.Body>
                        </Accordion.Item>

                        </Accordion>
                    </Accordions>
                  </Col>
              </Row>
          </Container>
        </FaqWrapper>
    );
}

export default FAQ;   