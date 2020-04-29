import React from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

export default function CardContainer(props) {
  return <Card data={props.data} />;
}

CardContainer.prototypes = {
  data: PropTypes.object.isRequired,
};
