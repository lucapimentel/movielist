import React from "react";
import PropTypes, { object } from "prop-types";

export default function EpisodesList(props) {
  function renderEpisodeList() {
    if (props) {
      const { data } = props;
      return data.map(function (episode, index) {
        const { airdate, number, season, url, name } = episode;
        return (
          <tr key={index}>
            <td>{number}</td>
            <td>Season {season}</td>
            <td>{airdate}</td>
            <td>{name}</td>
            <td>{url}</td>
          </tr>
        );
      });
    }
  }

  return (
    <div className="episodes">
      <h2>Episodes List</h2>
      <div className="episodes-container">
        <div className="episodes-content">
          <table>
            <thead>
              <tr>
                <th>Number</th>
                <th>Season</th>
                <th>Date</th>
                <th>Name</th>
                <th>Url</th>
              </tr>
            </thead>
            <tbody>{renderEpisodeList()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

EpisodesList.prototypes = {
  data: PropTypes.arrayOf(object).isRequired,
};
