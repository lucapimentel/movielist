import React from "react";
import { render } from "@testing-library/react";
import Pagination from "../Pagination/Pagination";

it("should render Pagination component without error", () => {
  const mockPaginate = jest.fn();
  const defaultProps = {
    pageNumbers: [1, 2, 4, 5],
    currentPage: 1,
    paginate: mockPaginate,
  };
  render(<Pagination {...defaultProps} />);
});
