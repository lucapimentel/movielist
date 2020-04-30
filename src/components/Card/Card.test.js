import React from "react";
import { render } from "@testing-library/react";
import Card from "../Card/Card";
import { MemoryRouter } from "react-router-dom";

it("should render Card component without error", () => {
  const defaultProps = {
    id: 495,
    name: "Naruto",
    summary:
      "Naruto closely follows the life of a boy who is feared and detested by the villagers of the hidden leaf village of Konoha.",
    rating: {
      average: 8.6,
    },
    genres: ["Action", "Adventure", "Anime", "Fantasy"],
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/3/9744.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/3/9744.jpg",
    },
  };
  render(
    <MemoryRouter>
      <Card {...defaultProps} />
    </MemoryRouter>
  );
});
