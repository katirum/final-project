import React from 'react'
import { InnerWrapper, PageContainer, Title } from 'utils/GlobalStyles'
import mailimg from '../utils/assets/email.png'
import githubimg from '../utils/assets/github.png'
import portfolioimg from '../utils/assets/web.png'
import styled from 'styled-components/macro'

export const ContactPage = () => {
    
    return(
        <PageContainer>
            <InnerWrapper>
                <Title>Contact</Title>
                <H2>Hello, Creators!</H2>
                    <P>Get in touch with our creators to know more about this project or our other projects</P>
                    <ContactDetailsContainer>
                    <CreatorContainer>
           <a
              href="https://kartikap.netlify.app/"
              target="_blank"
              rel="noreferrer"
              role="button">
                <Img src="https://i.ibb.co/B3K0Lrt/kartika-Edited.png" alt="profpic" />
            </a>
            <CreatorInfoContainer><h4>Kartika Purwahyuningrum</h4>
            
            <IconContainer><a
            href={`mailto: tikaprw@gmail.com`}
            target="_blank"
            rel="noreferrer"
            role="button"><IconImg src={mailimg} alt='email'/>
            </a>
            <a
            href="https://github.com/katirum"
            target="_blank"
            rel="noreferrer"
            role="button"><IconImg src={githubimg} alt='github'/>
            </a>
            <a
            href="https://kartikap.netlify.app/"
            target="_blank"
            rel="noreferrer"
            role="button"><IconImg src={portfolioimg} alt='portfolio'/></a></IconContainer>
            
            </CreatorInfoContainer>
            </CreatorContainer>

            <CreatorContainer>
           <a
              href="https://neah-rockstroh-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
              role="button">
                <Img src="https://i.ibb.co/mhSSzgg/neah.jpg" alt="profpic" />
            </a>
            <CreatorInfoContainer><h4>Neah Rockstroh</h4>
            
            <IconContainer><a
            href={`mailto: neah.rockstroh@gmail.com`}
            target="_blank"
            rel="noreferrer"
            role="button"><IconImg src={mailimg} alt='email'/>
            </a>
            <a
            href="https://github.com/Archkrull"
            target="_blank"
            rel="noreferrer"
            role="button"><IconImg src={githubimg} alt='github'/>
            </a>
            <a
            href="https://neah-rockstroh-portfolio.netlify.app/"
            target="_blank"
            rel="noreferrer"
            role="button"><IconImg src={portfolioimg} alt='portfolio'/></a></IconContainer>
            
            </CreatorInfoContainer>
            </CreatorContainer>
         
        </ContactDetailsContainer>
                    
                </InnerWrapper>  </PageContainer> 
                )
}

const ContactDetailsContainer = styled.div`
    display: grid;
  grid-template-columns: 100%;
  margin-top: 5%;
  align-items: center;
  color: var(--secondary);
  @media (min-width: 668px){
    grid-template-columns: 50% 50%;  
  }
         
`
const Img = styled.img`
    border-radius: 50%;
    width: 300px;
    height: 300px;
    padding: 5px;
    object-fit: cover;
    border: 3px solid var(--secondary);

    @media (min-width: 200px) and (max-width: 299px){
        width: 150px;
    height: 150px;

}

@media (min-width: 300px) and (max-width: 699px){
    width: 200px;
    height: 200px;

}

@media (min-width: 700px) and (max-width: 1200px){
    width: 250px;
    height: 250px;
  
}
`
const IconImg = styled.img`
    width: 30px;
    height: 30px;
    filter: invert(94%) sepia(100%) saturate(150%) hue-rotate(240deg) brightness(111%) contrast(92%);
    margin-right: 10px;
`

const IconContainer = styled.div`
display:flex;
`

const CreatorContainer = styled.div`
    display: flex;
    flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5% 0 10%;
  /* border: 2px solid blue; */

  @media (min-width: 200px) and (max-width: 299px){
        margin: 30% 0;

}

@media (min-width: 300px) and (max-width: 699px){
    margin: 10% 0;

}
`

const CreatorInfoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 20px 0;
`

const H2 = styled.h2`
margin-top: 5%;
`

const P = styled.p`
@media (max-width: 700px){
    width: 80%;
    margin: 0 auto;

}
`