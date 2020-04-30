import React from "react";
import { render } from "@testing-library/react";
import PaginationContainer from "../Pagination";

it("should render PaginationContainer component without error", () => {
  const mockPaginate = jest.fn();
  const defaultProps = {
    dataPerPage: 10,
    totalData: 100,
    paginate: mockPaginate,
    currentPage: 1,
  };
  render(<PaginationContainer {...defaultProps} />);
});
