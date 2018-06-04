import React, { Component } from "react";
import styled from "styled-components";
import { CodeSide } from "../Styled/SideBar";
import { Intro } from "../Components/About.js";
import { BodyParty, PageBody, Content } from "../Styled/Pages.js";

export default class Projects extends Component {
  render() {
    return (
      <PageBody>
        <CodeSide />
        <BodyParty>
          <Content>
            <Intro>These are a few things I've worked on.</Intro>
          </Content>
        </BodyParty>
      </PageBody>
    );
  }
}
