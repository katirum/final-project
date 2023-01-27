import React, {useState, useEffect} from "react";
import Faq from "../components/Faq";
import { API_URL } from "utils/urls";
import styled from "styled-components/macro";
import { InnerWrapper, Title, PageContainer } from "utils/GlobalStyles";

export const FaqPage = () => {

  const [faqsData, setFaqsData] = useState([]);

  useEffect(() => {
      fetch(API_URL("faq"))
        // eslint-disable-next-line no-undef
        .then((res) => res.json())
        .then((data) => setFaqsData(data))
        .catch((error) => console.log(error))
    }, [])
  return (
    <PageContainer>
    <InnerWrapper>
      <Title>FAQ</Title>
        <StyledFaqsList>
          {faqsData.map((faq, i) => (
              <Faq key={"faq_" + i} question={faq.question} answer={faq.answer} />
          ))}
      </StyledFaqsList>
      </InnerWrapper>
    
      </PageContainer>
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

  @media (max-width: 700px){
    margin: 5%;
    padding: 5px;
    font-size: 15px;
  }
`;