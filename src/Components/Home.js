import React, { Component } from "react";
import styled from "styled-components";
import HomeSide from "../Styled/SideBar.js";
import LinkedUp from "../Styled/LinksBar";

// styled components mang
const HomeBodyHaHa = styled.body`
  height: 150vh;
  width: 100%;
  display: flex;
`;
const HomeContent = styled.div`
  height: 100%;
  width: 70%;
`;

export default class Home extends Component {
  render() {
    return (
      <HomeBodyHaHa>
        <HomeSide />
        <HomeContent>
          <LinkedUp />
        </HomeContent>
      </HomeBodyHaHa>
    );
  }
}
