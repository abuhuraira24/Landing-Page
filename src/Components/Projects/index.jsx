import { CaptionTitle, Left, Caption, LeftContent, ProjectTitle, ProjectWrapper, Right, Title, ViewH6,SubTitle, CardWrapper, RighttContent, Image, Img } from "./ProjectElements.";

import {Container, Row, Col} from "../Utils/Elements"

import Card from "../Projects/Card.png"

import Card2 from "../Projects/Card2.png"

import Card3 from "../Projects/Card3.png"

const Project = () => {
    return (
        <ProjectWrapper  id="features">
            <Container>
                <Row>
                    <ProjectTitle>
                        <Left>
                            <Title>View our projects</Title>
                        </Left>
                        <Right>
                            <ViewH6>View More  →</ViewH6>
                        </Right>
                    </ProjectTitle>
                </Row>
            </Container>
            <Container>
            <Row>
               <Col w="60" md="100">
                 <LeftContent bg={Card}>
                     <CardWrapper w="50" md="100">
                         <Caption align="end">
                        <CaptionTitle>
                            Workhub office Webflow Webflow Design
                        </CaptionTitle>
                        <SubTitle>
                            Euismod faucibus turpis eu gravida mi.     Pellentesque et velit aliquam
                        </SubTitle>
                        <ViewH6 color="#FCD980">View Project  →</ViewH6>
                    </Caption>
                     </CardWrapper>
                    
                 </LeftContent>
              </Col>
              <Col w="40"  md="100">
                 <RighttContent bg={Card2}>
                    <CardWrapper w="100">
                         <Caption align="end">
                           <CaptionTitle>
                             Unisaas Website Design
                           </CaptionTitle>
                          <SubTitle>
                            Euismod faucibus turpis eu gravida mi.     Pellentesque et velit aliquam
                          </SubTitle>
                           <ViewH6 color="#FCD980">View portfolio  →</ViewH6>
                        </Caption>
                     </CardWrapper>    
                 </RighttContent>  

                 <Image>
                     <Img src={Card3} alt="card3"/>
                 </Image> 
              </Col>
                </Row>
            </Container>
        </ProjectWrapper>
    );
}



export default Project;