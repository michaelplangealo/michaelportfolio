import React, { Component } from "react";
import styled from "styled-components";
import { AboutSide } from "../Styled/SideBar.js";
import { BodyParty, PageBody, Content } from "../Styled/Pages.js";

const ContentContent = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

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
const Peekaboo = styled.div`
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
  font-size: 12px;
  width: 80%;
  color: grey;
`;
const NotCute = styled.div`
  letter-spacing: 0.5px;
  text-rendering: optimizeLegibility;
  line-height: 36px;
  margin-bottom: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 15px;
  color: grey;
`;

const Interest = styled.section`
  width: 70%;
  display: flex;
  ${"" /* background: red; */};
`;
const Topics = styled.div`
  width: 40%;
  height: 50%;
  & p {
    letter-spacing: 0.2px;
    text-rendering: optimizeLegibility;
    line-height: 36px;
    margin-bottom: 0;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: grey;
    text-decoration: underline;
  }
`;

const Examples = styled.div`
  width: 60%;
  height: 50%;
`;
const ExmpLinks = styled.div`
  width: 50%;
  height: 100%;
  p {
    letter-spacing: 0.2px;
    text-rendering: optimizeLegibility;
    line-height: 36px;
    margin-bottom: 0;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: grey;
  }
  a {
    letter-spacing: 0.2px;
    text-rendering: optimizeLegibility;
    line-height: 36px;
    margin-bottom: 0;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: grey;
    text-decoration: none;
    &:hover {
      color: tomato;
    }
  }
`;
const Line = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid white;
  border-bottom: 1px solid lightgrey;
  width: 30%;
`;

export default class About extends Component {
  render() {
    return (
      <PageBody>
        <AboutSide />
        <BodyParty>
          <Content>
            <ContentContent>
              <AboutIntro>
                Hi there. I'm Michael Plange, a Front-End Web Developer based
                out of Dallas, Texas. <Peekaboo>yeehaw</Peekaboo>
              </AboutIntro>
              <AboutContent>
                I graduated from the University of Texas at Arlington in 2014
                with a Bachelor of Science in Psychology. I did research there
                as well, over a large array of topics, mostly in emotions and
                behavior as well as the effects of pharmaceutical medicine. Lab
                rats and unwilling research participants were my best friends,
                but in the meantime I fostered my love for anything and
                everything creative. While I was wrapping up my undergrad, I had
                the choice of pursuing either my Masters or PhD, or applying for
                Pharamcy School. It was then I realized that I probably
                shouldn't do either of those things (the last thing the world
                needs is a bad therapist or a bad pharamcist) and decided to
                turn my attention elsewhere. I felt that the best field for me
                to work in would be a field in which I could explore creative
                possibilities while solving a problem, imbued with my own
                personality. After a bit of much needed soul-searching, I found
                myself in the field of Web Development, scratching my itch of
                being both creative and practical.
              </AboutContent>
              <NotCute>
                Art and design, and some animating, these are a few of my
                favorite things 🎤🎶<Peekaboo>
                  Sung to the tune of "Favorite Things".
                </Peekaboo>
              </NotCute>
              <Interest>
                <Topics>
                  <p>HOBBIES / INTEREST:</p>
                </Topics>
                <Examples>
                  <ExmpLinks>
                    <p>Three.js</p>{" "}
                    <a href="https://threejs.org/">
                      A way to create high quality 3d animations using
                      javascript
                    </a>
                    <Line />
                    <p>p5.js</p>{" "}
                    <a href="https://p5js.org/">An alternative to three.js</a>
                    <Line />
                    <p>Blender</p>
                    <a href="https://www.blender.org/">
                      An open source animations library
                    </a>
                  </ExmpLinks>
                </Examples>
              </Interest>
              <Interest>
                <Topics>
                  <p>VIDEOS / PODCAST</p>
                </Topics>
                <Examples>
                  <ExmpLinks>
                    <a href="https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw">
                      The Coding Train - A channel aimed at creative coding, as
                      well as p5.js
                    </a>
                    <Line />
                    <a href="https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q/featured">
                      Fun Fun Function - A lighthearted way to learn all the
                      heavy hitting parts of code
                    </a>
                    <Line />
                    <a
                      href="
                  https://www.blenderguru.com/"
                    >
                      Blender Guru - Incredibly informative tutorials and
                      disucssion using Blender.
                    </a>
                    <Line />
                    <a href="https://www.npr.org/podcasts/510313/how-i-built-this">
                      How I Built This - Informative series discussing the
                      origins of many companies, and how the people behind the
                      scenes started.
                    </a>
                    <Line />
                    <a href="https://www.npr.org/series/tiny-desk-concerts/">
                      NPR Tiny Desk Concerts - If you don't like music, not sure
                      if we can be friends.
                    </a>
                  </ExmpLinks>
                </Examples>
              </Interest>
            </ContentContent>
          </Content>
        </BodyParty>
      </PageBody>
    );
  }
}
