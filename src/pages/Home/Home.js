import React, { Component } from "react";
import GridContainer from "../../components/Grid";
import HeaderContainer from "../../components/Header";

export default class Home extends Component {
  render() {
    return (
      <div data-testid="home" className="page-container">
        <HeaderContainer />
        <GridContainer />
      </div>
    );
  }
}
