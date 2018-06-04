import React, { Component } from "react";
import styled from "styled-components";
import { CodeSide } from "../Styled/SideBar";
import { BodyParty, PageBody, Content } from "../Styled/Pages.js";

export default class Code extends Component {
  render() {
    return (
      <PageBody>
        <CodeSide />
        <BodyParty>
          <Content />
        </BodyParty>
      </PageBody>
    );
  }
}
