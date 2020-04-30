import React from "react";
import {
  FaSearchPlus,
  FaExternalLinkAlt,
  FaRegCommentDots,
} from "react-icons/fa";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

export default function Card(props) {
  let history = useHistory();
  function renderCardThumbnail() {
    const { image, id } = props;
    return (
      <div className="card-thumb">
        <img src={image} alt="" />
        <div className="overlay">
          <div className="overlay-content">
            <div className="action-buttons">
              <div>
                <FaExternalLinkAlt
                  onClick={() => {
                    history.push(`/details/${id}`);
                  }}
                />
              </div>
            </div>
            <div className="action-buttons">
              <div>
                <a href={image}>
                  <FaSearchPlus />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderCardContent() {
    const { name, genres, summary, rating, id } = props;
    return (
      <div className="card-content" data-testid="card">
        <h2
          className="card-title"
          onClick={() => {
            history.push(`/details/${id}`);
          }}
        >
          {name}
        </h2>
        <div className="card-metadata">
          <span className="card-author">{genres}</span>
          <span className="card-date">
            {rating.average !== null ? rating.average : "Not Scored"}
          </span>
        </div>
        <div className="card-content-text">
          <div
            dangerouslySetInnerHTML={{
              __html: summary,
            }}
          ></div>
        </div>
        <div className="card-footer">
          <div className="card-footer-content">
            <div className="card-comments">
              <FaRegCommentDots />
              <span className="card-footer-comment-counter">0</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="card">
      <div className="card-container">
        {renderCardThumbnail()}
        {renderCardContent()}
      </div>
    </article>
  );
}

Card.prototypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.string.isRequired,
};
