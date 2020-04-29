import React, { Component } from "react";
import GridContainer from "../../components/Grid";


export default class Home extends Component {
  render() {
    return (
      <div data-test="home" className="page-container">
        <GridContainer />
      </div>
    );
  }
}
