import React, { Component } from "react";
import styled from "styled-components";
import Home from "./Components/Home.js";
import routes from "./routes";
import LinkedUp from "./Styled/LinksBar.js";

const AppBody = styled.body`
  height: 100%;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <div>
        <LinkedUp />
        <div>{routes}</div>
      </div>
    );
  }
}

export default App;
