import React from "react";
import { Button, ContentBox, HeroContainer, Subtitle, Title } from "./HeroStyles";

const HeroPage = () => {

    return (
      <HeroContainer>
        <ContentBox>
        <Title>Your Spotify Statistics</Title>
        <Subtitle>Get insights into your listening habits</Subtitle>
        <Button href="#">Get Started</Button>
        </ContentBox>
      </HeroContainer>
    );
  };
  
  export default HeroPage;