import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../Home/Home";

it("should render Home page without error", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
});
