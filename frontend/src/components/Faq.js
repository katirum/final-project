import React, { useState } from "react";
import styled from "styled-components";

const Faq = props => {
 

const { question, answer } = props;
  const [isOpen, toggleOpen] = useState(false);

  return (
    
   <StyledFaq onClick={() => toggleOpen(!isOpen)}>
          <FaqQuestion>
              <span>{question}</span>
          </FaqQuestion>

          <FaqAnswer
              style={isOpen ? { display: "block" } : { display: "none" }}
          >
              <span>{answer}</span>
          </FaqAnswer>
          
      
          </StyledFaq>
    
  );
};

export default Faq;

/* const StyledFaq = styled.div`
  cursor: pointer;
  margin: 10px 0 10px;

  div.faq-question {
    font-size: 125%;
    font-weight: 800;
    margin: 10px 0 0;
    background-color: pink;
    border-radius: 5px 0 0;
  }

  div.faq-answer {
    border: 3px solid pink;
    overflow: hidden;
    color: var(--secondary);
    span {
      display: block; 
      padding: 20px 10px;
    }
  }
`; */

const StyledFaq = styled.div`
  cursor: pointer;
  margin: 10px 0 10px;
`
  const FaqQuestion = styled.div`
  font-size: 125%;
    font-weight: 800;
    margin: 10px 0 0;
    background-color: pink;
    border-radius: 5px 0 0;
  `
    
    const FaqAnswer = styled.div`
   border: 3px solid pink;
    overflow: hidden;
    color: var(--secondary);
    span {
      display: block; 
      padding: 20px 10px;
    }
    `


