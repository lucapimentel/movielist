import React from "react";
import {
  FaSearchPlus,
  FaExternalLinkAlt,
  FaRegCommentDots,
} from "react-icons/fa";
import PropTypes from "prop-types";

export default function Card(props) {
  function renderCardThumbnail() {
    if (props) {
        console.log(props);
      const image =
        props.data.image !== null
          ? props.data.image.medium
          : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png";
      return (
        <div className="post-thumb">
          <img src={image} alt="" />
          <div className="overlay">
            <div className="overlay-content">
              <div className="action-buttons">
                <div>
                  <FaExternalLinkAlt />
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
  }

  function renderCardContent() {
    if (props) {
      const { name, summary, type, rating } = props.data;
      return (
        <div className="post-content">
          <h2 className="post-title">{name}</h2>
          <div className="post-metadata">
            <span className="post-author">{type}</span>
            <span className="post-date">
              {rating.average !== null ? rating.average : "Not Scored"}
            </span>
          </div>
          <div className="post-content-text">
            <div
              dangerouslySetInnerHTML={{
                __html: summary,
              }}
            ></div>
          </div>
          <div className="post-footer">
            <div className="post-footer-content">
              <div className="post-comments">
                <FaRegCommentDots />
                <span className="post-footer-comment-counter">0</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <article className="card">
      <div className="post-container">
        {renderCardThumbnail()}
        {renderCardContent()}
      </div>
    </article>
  );
}

Card.prototypes = {
  data: PropTypes.object.isRequired,
};
