import React from 'react';
import {ButtonWrapper, CoverContainer, CoverContent, CoverH3, CoverImage, CoverP, CoverWrapper,Image,Text} from "../CoverSection/CoverElements"
import browser from "../CoverSection/browser.png"

import {Button} from "../Utils/Elements"
const CoverSection = () => {
    return (
        <>
         <CoverWrapper>
             <CoverContainer>
                <CoverContent>
                    <Text>
                        <CoverH3>
                           Building stellar websites for early startups
                        </CoverH3>
                        <CoverP>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </CoverP>
                        <ButtonWrapper>
                            <Button bg="#FCD980" colur="#1B1C2B">View our work</Button>
                        </ButtonWrapper>
                    </Text>
                    <CoverImage>
                        <Image src={browser} />
                    </CoverImage>
                </CoverContent>
             </CoverContainer>
         </CoverWrapper>
        </>
    );
}


export default CoverSection;