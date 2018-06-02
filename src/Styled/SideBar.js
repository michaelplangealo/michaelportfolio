import styled from "styled-components";
import React, { Component } from "react";

const BasicSide = styled.div`
  width: 25%;
  height: 100%;
  background: black;
  color: white;
  display: flex;
  flex-direction: columm;
  align-items: center;
  justify-content: center;
  padding-left: 40px;
`;
const BasicSideContainer = styled.div`
  height: 70%;
  width: 100%;
`;

//HOME SIDE BAR CONTENT YA DIG
const HomeHi = styled.h1`
  font-family: "Archivo", sans-serif;
  font-weight: 700;
  font-size: 60px;
`;
const WhereRU = styled.h2`
  font-family: "Karla", sans-serif;
  font-weight: 400;
  font-size: 40px;
`;
const IKidYouKnot = styled.img`
  width: 50%;
  height: 50%;
`;

export default class HomeSide extends Component {
  render() {
    return (
      <BasicSide>
        <BasicSideContainer>
          <HomeHi>Hi, my name is Michael Plange,</HomeHi>
          <WhereRU>and this is my website.</WhereRU>
        </BasicSideContainer>
      </BasicSide>
    );
  }
}
