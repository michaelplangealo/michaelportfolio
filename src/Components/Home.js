import React, { Component } from "react";
import styled from "styled-components";
import { HomeSide } from "../Styled/SideBar.js";
import { BodyParty, PageBody, Content } from "../Styled/Pages.js";
import { CSSTransitionGroup } from "react-transition-group";
import "./Home.css";

const HomeHi = styled.h1`
  letter-spacing: 0.2px;
  text-rendering: optimizeLegibility;
  line-height: 36px;
  margin-bottom: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 20px;
  width: 80%;
  height: 40%;
  padding-bottom: 10vh;
`;

export default class Home extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionName="homeTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <PageBody>
          <HomeSide />
          <BodyParty>
            <Content>
              <HomeHi>Hey there. </HomeHi>
            </Content>
          </BodyParty>
        </PageBody>
      </CSSTransitionGroup>
    );
  }
}
