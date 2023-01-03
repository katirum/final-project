import React from 'react'
import { Link } from 'react-router-dom'
import { MainScreen } from 'components/MainScreen'
import { Button, InnerWrapper } from 'utils/GlobalStyles'
import styled from 'styled-components/macro'
import {FaqsList} from 'components/FaqList'



export const AboutPage = () => {

    return(
        <AboutPageContainer >
            <InnerWrapper>

            <MainScreen title='Languable' >
                    <p>Our background is the inspiration behind the idea of this project. We have been in places where our native language is not the language of the place we live(d) in. Sometimes it can be hard to practice our skills without getting judged. We created this website for people who want to learn languages with no judgement, prejudice and most importantly, while having tasty cakes and warm cup of tea or coffee. If you are interested to know more, please join us!</p> 
                    <Link to="/login"><Button
                type="button">Start</Button></Link>
                </MainScreen>
                
                {/* FAQ */}

                <FaqsList />
                </InnerWrapper>
                </AboutPageContainer >
                )
}

const AboutPageContainer = styled.div`

    display: flex;
    text-align: center;
    margin: 20%;
    color: var(--secondary);
    border: 2px solid var(--secondary);
border-radius: 15px;
padding: 50px 0;

p{
    text-align: justify;
    margin: 5% 0;
}
`
