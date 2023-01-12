import React from "react";
import Faq from "../components/Faq";
import faqsData from '../utils/faq.json'
import styled from "styled-components";
import { Sidebar } from '../components/Sidebar'
import { InnerWrapper } from "utils/GlobalStyles";

export const FaqPage = () => {
  return (
    <FaqPageContainer>
    <Sidebar />
    <InnerWrapper>
        <StyledFaqsList>
          {faqsData.map((faq, i) => (
              <Faq key={"faq_" + i} question={faq.question} answer={faq.answer} />
          ))}
      </StyledFaqsList>
      </InnerWrapper>
    
      </FaqPageContainer>
  );
};

// background color of faqlist and font color for the question
const StyledFaqsList = styled.div`
background-color: whitesmoke;
text-align: center;
  /* margin: 20px 0; */
  margin: 20%;
  /* padding: 1rem; */
  padding: 20px;
  color: var(--secondary);
  border-radius: 15px;
`;

const FaqPageContainer = styled.div`
    /* display: flex; 
    text-align: center;
    
    color: var(--secondary);*/
    /* border: 2px solid var(--secondary); 
border-radius: 15px;
padding: 50px 0;*/
`