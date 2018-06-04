import React, { Component } from "react";
import styled from "styled-components";
import { AboutSide } from "../Styled/SideBar.js";
import { BodyParty, PageBody, Content } from "../Styled/Pages.js";

const AboutIntro = styled.h1`
  letter-spacing: 0.2px;
  text-rendering: optimizeLegibility;
  line-height: 36px;
  margin-bottom: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 20px;
  width: 80%;
  height: 5vh;
  color: darkgrey;
`;
const YeeHaw = styled.div`
  color: white;
  &:hover {
    color: tomato;
  }
`;
const AboutContent = styled.article`
  letter-spacing: 0.2px;
  text-rendering: optimizeLegibility;
  line-height: 36px;
  margin-bottom: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 15px;
  width: 80%;
  color: grey;
`;

export default class About extends Component {
  render() {
    return (
      <PageBody>
        <AboutSide />
        <BodyParty>
          <Content>
            <AboutIntro>
              Hi there. I'm Michael Plange, a Front-End Web Developer based out
              of Dallas, Texas. <YeeHaw>yeehaw!</YeeHaw>
            </AboutIntro>
            <AboutContent>
              I graduated from the University of Texas at Arlington in 2014 with
              a Bachelor of Science in Psychology. I did research there as well,
              over a large array of topics, mostly in emotions and behavior as
              well as the effects of pharmaceutical medicine. Lab rats and
              unwilling research participants were my best friends, but in the
              meantime I fostered my love for anything and everything creative.
              While I was wrapping up my undergrad, I had the choice of pursuing
              either my Masters or PhD, or applying for Pharamcy School. It was
              then I realized that I probably shouldn't do either of those
              things (the last thing the world needs is a bad therapist or a bad
              pharamcist) and decided to turn my attention elsewhere. I felt
              that the best field for me to work in would be a field in which I
              could explore creative possibilities while solving a problem,
              imbued with my own personality.
            </AboutContent>
          </Content>
        </BodyParty>
      </PageBody>
    );
  }
}
