import React, { useState } from "react";
import styled from "styled-components";
import open from "../utils/assets/add.png"

const Faq = props => {
 

const { question, answer } = props;
  const [isOpen, toggleOpen] = useState(false);
  function handleClick() {
    toggleOpen(!isOpen);
  } 
  return (
    
   <StyledFaq >
          <FaqQuestion onClick={handleClick}>
              <span>{question} <img src={open} alt="open answer"/></span>
          </FaqQuestion>

          <FaqAnswer isOpen={isOpen}
          >
            <span>{answer}</span>
          </FaqAnswer>
          </StyledFaq>
    
  );
};

export default Faq;

const StyledFaq = styled.div`
  cursor: pointer;
  margin: 10px 0 10px;
`
  const FaqQuestion = styled.div`
  font-size: 125%;
    font-weight: 800;
    margin: 10px 0 0;
   background-color: var(--primary);
    border: var(--primary);
    border-radius: 5px 0 0;
    padding: 20px 0; 
    

    img{
      width: 20px;
      filter: invert(100%) sepia(17%) saturate(121%) hue-rotate(250deg) brightness(118%) contrast(92%);
      margin-left: 15px;
    }
  `
    //Styles the answers, such as background and font
    const FaqAnswer = styled.div`
   border: 3px solid whitesmoke;
    overflow: hidden;
    color: var(--primary);
    opacity: ${props => (props.isOpen ? "1" : "0")};
    max-height: ${props => (props.isOpen ? "100%" : "0")};
    padding: ${props => (props.isOpen ? "15px" : "0 15px")};
    overflow: hidden;
    transition: all 0.4s ease;
    
    span {
      display: block;
      padding: 20px 10px;
      
    }
    `


