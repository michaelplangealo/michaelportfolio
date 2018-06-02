import styled from "styled-components";
import React, { Component } from "react";

const LinkMe = styled.div`
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 70%;
  position: fixed;
  box-sizing: border-box;
`;

const LinkContainer = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  &p {
    color: grey;
    font-size: 10px;
  }
`;

export default class LinkedUp extends Component {
  render() {
    return (
      <LinkMe>
        <LinkContainer>
          <p>Home</p>
          <p>About</p>
          <p>Write</p>
          <p>Code</p>
        </LinkContainer>
      </LinkMe>
    );
  }
}
