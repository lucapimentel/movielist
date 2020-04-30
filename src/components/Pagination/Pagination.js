import React from "react";
import PropTypes, { number } from "prop-types";

export default function Pagination(props) {
  function renderPageNumbers() {
    if (props) {
      const { pageNumbers, currentPage, paginate } = props;
      return pageNumbers.map(function (pageNumber, index) {
        return (
          <li
            key={index}
            className={pageNumber === currentPage ? "item active" : "item"}
          >
            <span
              onClick={() => {
                paginate(pageNumber);
              }}
            >
              {pageNumber}
            </span>
          </li>
        );
      });
    }
  }
  return (
    <div className="pagination">
      <ul className="pagination-list">{renderPageNumbers()}</ul>
    </div>
  );
}

Pagination.prototypes = {
  pageNumbers: PropTypes.arrayOf(number).isRequired,
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};
