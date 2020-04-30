import React from "react";
import { render } from "@testing-library/react";
import GridContainer from "../Grid";

it("should render GridContainer component without error", () => {
  const { getByTestId } = render(<GridContainer />);
  expect(getByTestId("gridcontainer").children.length).toBe(2);
});
