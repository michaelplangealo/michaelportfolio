import styled from "styled-components";
import React, { Component } from "react";

const BasicSide = styled.div`
  width: 25vw;
  height: 100%;
  background: black;
  color: white;
  display: flex;
  flex-direction: columm;
  align-items: center;
  justify-content: center;
`;
const BasicSideContainer = styled.div`
  height: 70%;
  width: 100%;
  padding: 20px 20px 20px 20px;
  text-align: center;
`;

// BAR CONTENT YA DIG
const SideHi = styled.h1`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  font-size: 69px;
`;
const Hidden = styled.div`
  color: black;
  &:hover {
    color: tomato;
  }
`;
const WhereRU = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
`;
const ContactMe = styled.div`
  height: 15%;
  width: 100%;
  text-align: center;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  p {
    color: white;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 12px;
  }
  a {
    color: white;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 12px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: tomato;
    }
  }
  div {
    width: 78%;
    display: flex;
    justify-content: space-between;
  }
  span {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
`;

export class HomeSide extends Component {
  render() {
    return (
      <BasicSide>
        <BasicSideContainer>
          <SideHi>hi, i'm michael plange,</SideHi>
          <Hidden>yoo-hoo</Hidden>
          <WhereRU>and this is my website.</WhereRU>
          <Hidden>please enjoy your stay.</Hidden>
          <ContactMe>
            <div>
              <span class="fas fa-envelope-open" />
              <a href="mailto:michaelpplange@gmail.com">
                michaepplange@gmail.com
              </a>
            </div>
            <span>
              <span class="fab fa-linkedin" />
              <a href="https://www.linkedin.com/in/michaelplange/">
                /in/michaelplange
              </a>
            </span>
            <div>
              <i class="fab fa-github" />
              <a href="https://github.com/michaelplangealo">
                github.com/michaelplangealo
              </a>
            </div>
          </ContactMe>
        </BasicSideContainer>
      </BasicSide>
    );
  }
}

export class AboutSide extends Component {
  render() {
    return (
      <BasicSide>
        <BasicSideContainer>
          <SideHi>hi, i'm michael plange.</SideHi>
          <Hidden>michael plange i am.</Hidden>
          <WhereRU>
            i'm made up of 90% hard work & 10% spongebob quotes.
          </WhereRU>
          <Hidden>please enjoy your stay.</Hidden>
        </BasicSideContainer>
      </BasicSide>
    );
  }
}

export class WriteSide extends Component {
  render() {
    return (
      <BasicSide>
        <BasicSideContainer>
          <SideHi>hi, i'm michael plange,</SideHi>
          <Hidden>mmmhmm</Hidden>
          <WhereRU>& sometimes i write.</WhereRU>
          <Hidden>please enjoy your stay.</Hidden>
        </BasicSideContainer>
      </BasicSide>
    );
  }
}

export class CodeSide extends Component {
  render() {
    return (
      <BasicSide>
        <BasicSideContainer>
          <SideHi>hi, i'm michael plange,</SideHi>
          <Hidden>mmmhmm</Hidden>
          <WhereRU> and this is a bit of my work.</WhereRU>
          <Hidden>please enjoy your stay.</Hidden>
        </BasicSideContainer>
      </BasicSide>
    );
  }
}
