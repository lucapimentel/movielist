import React from "react";
import { render } from "@testing-library/react";
import SearchBar from "../SearchBar/SearchBar";

it("should render SearchBar component without error", () => {
  const mockHandleChange = jest.fn();
  const mockHandleSubmit = jest.fn();
  const defaultProps = {
    handleChange: mockHandleChange,
    handleSubmit: mockHandleSubmit,
  };
  render(<SearchBar {...defaultProps} />);
});
