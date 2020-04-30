import React from "react";
import CardContainer from "../Card";
import PropTypes from "prop-types";

export default function Grid(props) {
  function renderShowCards() {
    if (props) {
      const { data } = props;

      if (data) {
        return data.map(function (show, index) {
          return <CardContainer key={index} data={show} />;
        });
      }
    }
  }
  return (
    <div data-test="grid">
      <div className="grid">
        <div className="grid-container">
          <div className="grid-container-content">{renderShowCards()}</div>
          <div className="grid-container-footer"></div>
        </div>
      </div>
    </div>
  );
}

Grid.prototypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
