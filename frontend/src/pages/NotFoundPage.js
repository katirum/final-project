import React from "react";
import styled from "styled-components/macro";
import { InnerWrapper, PageContainer } from "utils/GlobalStyles";

export const NotFoundPage = () => {
  return (
    <PageContainer>
      <InnerWrapper>
        <NotFoundContainer>
          <h1>Error: page not found</h1>
        </NotFoundContainer>
      </InnerWrapper>
    </PageContainer>
  );
};

const NotFoundContainer = styled.div`
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`