import React from "react";
import Faq from "../components/Faq";
import styled from "styled-components/macro";
import { InnerWrapper, Title, PageContainer } from "utils/GlobalStyles";

export const FaqPage = () => {


  return (
    <PageContainer>
      <InnerWrapper>
        <Title>FAQ</Title>
        <StyledFaqsList>
          <Faq question="How do I use this page?" 
                answer="We believe that the best way to learn a language is by talking and having conversations. 
                When you create an account you are able to see and create events, so that you can connect with other people to learn the language. 
                To find an event, you search by either language or place. All neccessary info about the event should be in the description.
                After you've found an event, the only thing you need to do is attend!" />
          <Faq question="Why should we only meet at cafes?" 
                answer="As this is not a dating app, we believe that the best  way to connect people in a safe and comfortable environment is to meet at a public space such as a café." />
          <Faq question="Why is there no event in my city?"
                answer="All events are created by our users.If there is no event in your city, it means that no one has created one yet. Why not be the first?" />
          <Faq question="Who can join the events?" 
                answer="It depends on the organizer. They will be the one who set the rules when it comes to who can join.
                Some conversations might be advanced and therefore more suitable for advanced learners.
                So, please read the description carefully and decide for yourself." />
          <Faq question="Why is it called languable?"
                answer="It is a play on words! Where is one of the best places to hang out and socialize?
                At a cafe of course! We wanted to incorporate that feeling, and that is why we connected the word &quot;language&quot; and &quot;table&quot; to each other.
                Conversing with other people is also what makes you more &quot;able&quot; to speak in the end." />
          <Faq question="Do I have to pay to join?"
                answer="No, you do not have to pay to join. 
                Languable is a completely free, as we want as many people as possible to be able to practice languages." />
        </StyledFaqsList>
      </InnerWrapper>
   </PageContainer>
  );
};

// background color of faqlist and font color for the question
const StyledFaqsList = styled.div`
  background-color: whitesmoke;
  text-align: center;
  margin: 20%;
  padding: 20px;
  color: var(--secondary);
  border-radius: 15px;

  @media (max-width: 700px){
    margin: 5%;
    padding: 5px;
    font-size: 15px;
  }
`;