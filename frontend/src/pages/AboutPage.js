import React from 'react'
import { Link } from 'react-router-dom'
import { MainScreen } from 'components/MainScreen'
import { Button, InnerWrapper } from 'utils/GlobalStyles'
import styled from 'styled-components/macro'
import { FaqPage } from './FaqPage'



export const AboutPage = () => {

    return(
        <AboutPageContainer >
            <InnerWrapper aboutPageWrapper>

            <MainScreen title='Languable' >
                    <p>Our background is the inspiration behind the idea of this project. We have been in places where our native language is not the language of the place we live(d) in. Sometimes it can be hard to practice our skills without getting judged. We created this website for people who want to learn languages with no judgement, prejudice and most importantly, while having tasty cakes and warm cup of tea or coffee. If you are interested to know more, please join us!</p> 
                    <Link to="/login"><Button
                type="button">Start</Button></Link>
                </MainScreen>
                
                {/* FAQ */}

                {/* <FaqPage /> */}
                </InnerWrapper>
                </AboutPageContainer >
                )
}

const AboutPageContainer = styled.div`

    display: flex;
    text-align: center;
    margin: 20% 15%;
    color: var(--secondary);
    border: 2px solid var(--secondary);
    border-radius: 15px;
    padding: 50px 0;

p{
    text-align: justify;
    margin: 30px 0;
}

@media (min-width: 200px) and (max-width: 299px){
    margin: 60% 5%;

    p{
    margin: 30px 10px;
    }
}

@media (min-width: 300px) and (max-width: 699px){
    margin: 50% 10%;

    p{
    margin: 30px 10px;
    }
}

@media (min-width: 700px) and (max-width: 1200px){
    margin: 30% 10%;
}
`
