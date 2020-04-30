import React from "react";
import { render } from "@testing-library/react";
import SearchBarContainer from "../SearchBar";

it("should render SearchBarContainer component without error", () => {
  const mockSubmit = jest.fn();
  const defaultProps = {
    searchSubmit: mockSubmit,
  };
  render(<SearchBarContainer {...defaultProps} />);
});
