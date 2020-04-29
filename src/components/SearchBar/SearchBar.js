import React from "react";
import PropTypes from "prop-types";

export default function SearchBar(props) {
  return (
    <div className="searchbar-container">
      <div className="searchbar-input">
        <form action="" onSubmit={props.handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            name="search"
            id="search"
            onChange={props.handleChange}
            onSubmit={props.handleSubmit}
          />
          <label>Search</label>
        </form>
      </div>
    </div>
  );
}

SearchBar.prototypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
