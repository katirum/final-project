import React from 'react'
import { Link } from 'react-router-dom'
import { Button, InnerWrapper, Title, PageContainer } from 'utils/GlobalStyles'
import styled from 'styled-components/macro'
/* import { FaqPage } from './FaqPage' */



export const AboutPage = () => {

    return(
        <PageContainer>
            <InnerWrapper>
                

            <Title>About Languable </Title>
            <AboutPageContainer>
                    <p>Our background is the inspiration behind the idea of this project. We have been in places where our native language is not the language of the place we live(d) in. Sometimes it can be hard to practice our skills without getting judged. We created this website for people who want to learn languages with no judgement, prejudice and most importantly, while having tasty cakes and warm cup of tea or coffee. If you are interested to know more, please join us!</p> 
                    <Link to="/login"><Button
                type="button">Start</Button></Link></AboutPageContainer>
               
                
                {/* FAQ */}

                {/* <FaqPage /> */}
                </InnerWrapper>
                </PageContainer >
                )
}


// Container for entire about page content
const AboutPageContainer = styled.div`
    margin: 15%;
    color: var(--secondary);
    border: 2px solid var(--secondary);
    border-radius: 15px;
    padding: 5%;

p{
    text-align: justify;
    margin: 30px 0;
}

//about page container for really small devices
@media(max-width: 350px){
    p{
    font-size: 13px;
    }
}
//about page container for  small devices
@media(min-width: 351px) and (max-width: 700px){
    margin: 20% 15%;

    p{
    margin: 30px 10px;
    }
}

`
