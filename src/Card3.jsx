// Card1.js
import React from "react";
import styled from "styled-components";
import { Button } from "./Styles/Button";

const CardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  margin: 1rem;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    color: #555;
  }
`;

const Card1 = () => {
  return (
    <CardWrapper>
      <CardImage src="./images/card3.jpg" alt=" currency converter" />
      <CardContent>
        <h3>currency converter</h3>
        <p>Description for Card 1</p>
        <Button className="btn">Read More</Button>
      </CardContent>
    </CardWrapper>
  );
};

export default Card1;
