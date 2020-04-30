import React from "react";
import Pagination from "../Pagination/Pagination";
import PropTypes from "prop-types";

export default function PaginationContainer(props) {
  const pageNumbers = [];
  const { dataPerPage, totalData } = props;

  for (let index = 1; index <= Math.ceil(totalData / dataPerPage); index++) {
    pageNumbers.push(index);
  }

  function handlePageClick(pageNumber) {
    const { paginate } = props;
    paginate(pageNumber);
  }

  return (
    <Pagination
      pageNumbers={pageNumbers}
      currentPage={props.currentPage}
      paginate={handlePageClick}
    />
  );
}

PaginationContainer.prototypes = {
  dataPerPage: PropTypes.number.isRequired,
  totalData: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
