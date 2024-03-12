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
      <CardImage src="./images/card1.jpg" alt="Card 1" />
      <CardContent>
        <h3>multipage portfolio react</h3>
        <p></p>
        <Button className="btn">Read More</Button>
      </CardContent>
    </CardWrapper>
  );
};

export default Card1;
