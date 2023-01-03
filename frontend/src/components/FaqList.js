import React from "react";
import Faq from "./Faq";
import faqsData from '../utils/faq.json'
import styled from "styled-components";

export const FaqsList = () => {
  return (
    <StyledFaqsList>
      {faqsData.map((faq, i) => (
        <Faq key={"faq_" + i} question={faq.question} answer={faq.answer} />
      ))}
    </StyledFaqsList>
  );
};

const StyledFaqsList = styled.div`
background-color: salmon;
  margin: 20px 0;
  padding: 1rem;
  color: var(--primary);
  border-radius: 15px;
`;