import styled from "styled-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";

const LinkMe = styled.div`
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 60%;
  position: fixed;
  right: 10vh;
  top: 5vh;
  box-sizing: border-box;
  background: white;
`;

const LinkContainer = styled.div`
  height: 100%;
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & a {
    color: grey;
    font-size: 15px;
    text-decoration: none;
    &:hover {
      color: tomato;
      transition: 0.4s;
    }
  }
  &.strikeMe {
    text-decoration: line-through;
  }
`;

export default class LinkedUp extends Component {
  render() {
    return (
      <LinkMe>
        <LinkContainer>
          <Link to="/">Home</Link>

          <Link to="/About">About</Link>

          <Link to="/Write" className="strikeMe">
            Write
          </Link>

          <Link to="/Projects">Projects</Link>
        </LinkContainer>
      </LinkMe>
    );
  }
}
