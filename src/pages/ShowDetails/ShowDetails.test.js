import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ShowDetails from "../ShowDetails/ShowDetails";

it("should render ShowDetails page without error", () => {
  const defaultProps = {
    match: {
      params: { showId: 1 },
    },
  };
  render(
    <MemoryRouter>
      <ShowDetails {...defaultProps} />
    </MemoryRouter>
  );
});
