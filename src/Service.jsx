// Service.js
import React from "react";
import styled from "styled-components";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-bottom: 2rem; /* Add margin-bottom for space */
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const UpperRow = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const Service = () => {
  return (
    <Wrapper>
      <h1 className="common-heading">My project</h1>
      <UpperRow>
        <Card1 />
        <Card2 />
      </UpperRow>
      <CardContainer>
        <Card3 />
        <Card4 />
      </CardContainer>
    </Wrapper>
  );
};

export default Service;
