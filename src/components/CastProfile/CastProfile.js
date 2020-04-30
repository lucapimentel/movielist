import React from "react";
import PropTypes, { object } from "prop-types";

export default function CastProfile(props) {
  function renderCast() {
    if (props) {
      const { data } = props;
      return data.map(function (cast, index) {
        return (
          <div className="cast-profile-container" key={index}>
            <div className="cast-profile-picture">
              <img src={cast.person.image.medium} alt="" />
            </div>
            <div className="cast-profile-info">
              <div className="label">{cast.person.name}</div>
              <div className="info-value">{cast.character.name}</div>
            </div>
          </div>
        );
      });
    }
  }
  return (
    <div className="cast-profile">
      <h2>Cast</h2>
      {renderCast()}
    </div>
  );
}

CastProfile.prototypes = {
  data: PropTypes.arrayOf(object).isRequired,
};
