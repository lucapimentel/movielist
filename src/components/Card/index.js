import React from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

export default function CardContainer(props) {
  const { id, name, summary, rating, genres } = props.data;
  const image =
    props.data.image !== null
      ? props.data.image.medium
      : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png";
  return (
    <div data-testid="cardcontainer">
      <Card
        id={id}
        image={image}
        name={name}
        summary={summary}
        rating={rating}
        genres={genres.join(", ")}
      />
    </div>
  );
}

CardContainer.prototypes = {
  data: PropTypes.object.isRequired,
};
