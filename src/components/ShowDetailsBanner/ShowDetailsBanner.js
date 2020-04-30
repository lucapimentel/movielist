import React from "react";
import PropTypes from "prop-types";

export default function ShowDetailsBanner(props) {
  return (
    <article className="shows-details">
      <div className="shows-details-container">
        <div className="shows-details-tittle">
          <h1>{props.name}</h1>
        </div>
        <div className="shows-details-side">
          <div className="shows-details-banner">
            <img src={props.image} alt="" />
          </div>

          <div className="shows-details-content">
            <h2>Show Info</h2>
            <div
              className="shows-details-summary"
              dangerouslySetInnerHTML={{
                __html: props.summary,
              }}
            ></div>
            <div className="shows-details-info">
              <div className="shows-details-info-col-1">
                <div className="shows-details-info-item">
                  <div className="label">Genres</div>
                  <div className="info-value">{props.genres}</div>
                </div>
                <div className="shows-details-info-item">
                  <div className="label">Network</div>
                  <div className="info-value">{props.network}</div>
                </div>
                <div className="shows-details-info-item">
                  <div className="label">Schedule</div>
                  <div className="info-value">
                    {props.day} | {props.time}
                  </div>
                </div>
                <div className="shows-details-info-item">
                  <div className="label">Status</div>
                  <div className="info-value">{props.status}</div>
                </div>
              </div>
              <div className="shows-details-info-col-1">
                <div className="shows-details-info-item">
                  <div className="label">Show Type</div>
                  <div className="info-value">{props.type}</div>
                </div>
                <div className="shows-details-info-item">
                  <div className="label">Official site</div>
                  <a href={props.officialSite}>
                    <div className="info-value">{props.officialSite}</div>
                  </a>
                </div>
                <div className="shows-details-info-item">
                  <div className="label">Rating</div>
                  <div className="info-value">{props.rating}</div>
                </div>
                <div className="shows-details-info-item">
                  <div className="label">Created by</div>
                  <div className="info-value">{props.creator}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

ShowDetailsBanner.prototypes = {
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  officialSite: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  network: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
};
