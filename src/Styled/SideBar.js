import styled from "styled-components";
import React, { Component } from "react";
import ContactInfo from "../Styled/Contacts.js";

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

export class HomeSide extends Component {
  render() {
    return (
      <BasicSide>
        <BasicSideContainer>
          <SideHi>hi, i'm michael plange,</SideHi>
          <Hidden>yoo-hoo</Hidden>
          <WhereRU>and this is my website.</WhereRU>
          <Hidden>please enjoy your stay.</Hidden>
          <ContactInfo />
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
          <ContactInfo />
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
          <ContactInfo />
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
          <ContactInfo />
        </BasicSideContainer>
      </BasicSide>
    );
  }
}
