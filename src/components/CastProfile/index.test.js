import React from "react";
import { render } from "@testing-library/react";
import CastContainer from "../CastProfile";

it("should render CastContainer component without error", () => {
  const defaultProps = {
    showId: 3
  };
  render(<CastContainer {...defaultProps} />);
});
