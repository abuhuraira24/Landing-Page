import { BlogCart, BlogWrapper, H4, H5, Image, Link, Span, Text } from "./BlogElements";

import {Container, Row, Col} from "../Utils/Elements"

import person1 from "../Blog/person1.png"
import person2 from "../Blog/person2.png"
import person3 from "../Blog/person3.png"

const Blog = () => {
    return (
        <BlogWrapper id="blog">
           <Container>
               <Row>
                   <Col w="100">
                     <H4>Our blog</H4>
                   </Col>
               </Row>
               <Row>
                   <Col w="33.33" sm="100">
                       <BlogCart>
                           <Image src={person1} alt="person1"/>
                           <Span>19 Jan 2022</Span>
                           <H5>
                            How one Webflow user grew his single person consultancy from $0-100K in 14 months
                           </H5>
                           <Text>
                            See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                           </Text>
                           <Link>Read More  →</Link>
                       </BlogCart>
                   </Col>
                   <Col  w="33.33" sm="100">
                   <BlogCart>
                           <Image src={person2} alt="person1"/>
                           <Span>19 Jan 2022</Span>
                           <H5>
                            How one Webflow user grew his single person consultancy from $0-100K in 14 months
                           </H5>
                           <Text>
                            See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                           </Text>
                           <Link>Read More  →</Link>
                       </BlogCart>
                   </Col>
                   <Col  w="33.33" sm="100">
                   <BlogCart>
                           <Image src={person3} alt="person1"/>
                           <Span>19 Jan 2022</Span>
                           <H5>
                            How one Webflow user grew his single person consultancy from $0-100K in 14 months
                           </H5>
                           <Text>
                            See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                           </Text>
                           <Link>Read More  →</Link>
                       </BlogCart>
                   </Col>
               </Row>
           </Container>
        </BlogWrapper>
    )
}



export default Blog;