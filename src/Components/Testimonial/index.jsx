

import { TestmonialWrapper,LeftContent,LeftTitle, Text, RightContent, ReviewText,ReviewControler,ClietInfo, Image, Name, Img, Span, Bio } from "./TestimonialStyle";


import {Container, Row, Col} from "../Utils/Elements"

import client from "../Testimonial/client.jpg"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";


const Testimonial = () => {


    return (
        <TestmonialWrapper>
           <Container>
               <Row>
                   <Col w="40" md="100">
                     <LeftContent>
                        <LeftTitle>
                         What our clients say about us
                        </LeftTitle>
                        <Text>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
                        </Text>
                     </LeftContent>
                   </Col>
                   <Col w="60" md="100">
                     <Swiper spaceBetween={50}  modules={[Navigation]} className="mySwiper">

                        <SwiperSlide>
                            <RightContent>
                              <ReviewText>
                               "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
                             </ReviewText>
                             <ReviewControler>
                               <ClietInfo>
                                  <Image>
                                      <Img src={client} alt="cliet"/>
                                  </Image>
                                  <Name>
                                      <Span>Jenny Wilson</Span>
                                      <Bio>Vice President</Bio>
                                  </Name>
                               </ClietInfo>
                             </ReviewControler>
                            </RightContent>
                        </SwiperSlide>
                        <SwiperSlide>
                            <RightContent>
                              <ReviewText>
                               "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
                             </ReviewText>
                             <ReviewControler>
                               <ClietInfo>
                                  <Image>
                                      <Img src={client} alt="cliet"/>
                                  </Image>
                                  <Name>
                                      <Span>Abu Huraira</Span>
                                      <Bio>Vice President</Bio>
                                  </Name>
                               </ClietInfo>
                             </ReviewControler>
                            </RightContent>
                        </SwiperSlide>
                      </Swiper>
                       
                   </Col>
               </Row>
           </Container>
        </TestmonialWrapper>
    );
}


export default Testimonial;