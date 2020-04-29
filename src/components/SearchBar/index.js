import React, { useState } from "react";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";

export default function SearchBarContainer({ searchSubmit }) {
  const [searchValue, setSearchValue] = useState();

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchSubmit(searchValue);
  }

  return <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />;
}

SearchBarContainer.prototypes = {
  searchSubmit: PropTypes.func.isRequired,
};
