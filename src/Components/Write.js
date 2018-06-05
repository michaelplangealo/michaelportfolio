import styled from "styled-components";
import React, { Component } from "react";
import { WriteSide } from "../Styled/SideBar.js";
import { BodyParty, PageBody, Content } from "../Styled/Pages.js";
import "./Write.css";
import { CSSTransitionGroup } from "react-transition-group";

export default class Write extends Component {
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
          <WriteSide />
          <BodyParty>
            <Content>coming soon</Content>
          </BodyParty>
        </PageBody>
      </CSSTransitionGroup>
    );
  }
}
