import React, {useRef, useEffect} from 'react'
import styled, {css} from 'styled-components'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FeaturedSection = styled.div`
    position: relative;
    display: flex;
    /* width: calc(100% - 120px); */
    height: 100%;
    padding: ${(props) => (props.reversed ? '10px 90px 0 0;' : '10px 0 0 90px;')}; 
    /* padding: 0 0 0 0;     */
        
    /* ${(props) => (!props.reversed && props.showCircle && css`&::before{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        height: 280px;
        width: 280px;
        border-radius: 50%;
        background: #5D00D7;
        opacity: 0.3;
        z-index: -1;
        
        @media(max-width: 375px){
            height: 200px;
            width: 200px;
        }

        @media(max-height: 812px){
            height: 300px;
            width: 300px;
        }

        
        }`
    )} */

    @media(max-width: 1069px){
        padding: ${(props) => (props.reversed ? '3em 3em 0 0;' : '3em 0 0 3em;')}; 
        width: calc(100% - 60px);
    }

    @media(max-width: 965px){
        width: 100%;
        padding: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media(max-width: 320px){
        padding-top: 15%;
    }


    
`

const FeaturedContent = styled.div`
    width: 35%;
    margin-left: ${(props) => (props.reversed? 'auto': '0')};
    max-height: 380px;
    height: 380px;
    opacity: 0;    

    
    ${(props) => (props.reversed ? css`
        position: relative;
        right:  -46%; ` :
        css`
        position: relative;
        left: -45%; `  
    )}

    
    line-height: 150%;
    padding-top: 3.5em;

    @media(max-width: 1069px){
        width: 40%;
    }

    @media(max-width: 965px){
        width: 766.53px;
        margin-left: 0;
        max-height: 380px;
        height: auto;
    }

    @media(max-width: 855px){
        width: 600px;
    }
    
    @media(max-width: 641px){
        width: 90%;
    }
`

const SmHeading = styled.div`
    font-weight: bold;
    font-size: 18px;
    color: #5D00D7;
    opacity: 0.9;
    letter-spacing: 15px;

    @media(max-width: 414px){
        font-size: 16px;
        letter-spacing: 10px;
    }
`

const Heading2 = styled.h2`
    font-size: 33px;
    @media(max-width:1095px){
        /* font-size: 24px; */
    }

    @media(max-width: 375px){
        font-size: 24px;
    }
`

const Paragraph = styled.p`
    font-size: 16px;
    font-weight: 300;
    line-height:40px;
    margin-bottom: 20px;

    @media(max-width:1095px){
        line-height:30px;
    }

    /* @media(max-width:414px){
        font-size: 16px;
    } */
`  

const Image = styled.img`
    box-shadow: 0px 0px 4px -1px rgba(128,128,128,0.81);
    position: absolute;
    
    border-radius: 2%;
    width: 790px;
    height: 450px;

    /* ${(props) => (props.reversed && css`right: 48%; ` )}
    ${(props) => (!props.reversed && css`left: 48%; ` )} */

    opacity: 0.2;
    ${(props) => (!props.reversed && css`left: 98%; ` )}     
    ${(props) => (props.reversed && css`right: 98%; ` )}


    @media(max-width:1095px){
        width: 770px;
        height: 430px;
    }

    @media(max-width: 965px){
        position: static;
        width: 766.53px;
    }

    @media(max-width:855px){
        width: 600px;
        height: 330px;
    }

    @media(max-width: 641px){
        width: 90%;
        height: 270px;
    }

    @media(max-width: 414px){
        
        height: 220px;
    }

    @media(max-width: 375px){
        height: 200px;
    }

    
`

    


const Featured = ({reversed, showCircle, smheading, heading2, paragraph, source}) => {
    gsap.registerPlugin(ScrollTrigger)

    let contentRef = useRef() 
    let imageRef = useRef()
    
    useEffect(() => {
        gsap.to(contentRef.current, 
            {
                scrollTrigger: {
                    trigger: contentRef.current
                    
                    // markers: true
            },
            duration: 1,
            opacity: 1,
            right: "0",
            left: "0"
        })

        ///* ${(props) => (props.reversed && css`right: 48%; ` )}
        // ${(props) => (!props.reversed && css`left: 48%; ` )} */
        reversed ? gsap.to(imageRef.current, {
            scrollTrigger: {
                trigger: imageRef.current,
                // markers: true
            },
            duration: 2,
            opacity: 1,
            right: "48%" 
            
        }) : gsap.to(imageRef.current, {
            scrollTrigger: {
                trigger: imageRef.current,
                // markers: true
            },
            duration: 2,
            opacity: 1,
            left: "48%"
            
        })
        
        
    })

    
    return(
        <FeaturedSection id='work' reversed={reversed} showCircle={showCircle}>
            <FeaturedContent ref={contentRef} reversed={reversed}>
                <SmHeading>{smheading}</SmHeading>
                <Heading2>{heading2}</Heading2>
                <Paragraph>{paragraph}</Paragraph>
            </FeaturedContent>
            
            <Image  ref={imageRef} reversed={reversed} src={source}></Image>
            
        </FeaturedSection>
       
    )
}

export default Featured 
