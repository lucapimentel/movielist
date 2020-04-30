import React, { Component } from "react";
import ShowDetailsBannerContainer from "../../components/ShowDetailsBanner";
import EpisodesListContainer from "../../components/EpisodesList";
import CastProfileContainer from "../../components/CastProfile";
import HeaderContainer from "../../components/Header";
import PropTypes, { string } from "prop-types";

export default class ShowDetails extends Component {
  render() {
    const { showId } = this.props.match.params;
    return (
      <div data-testid="showdetails" className="page-container">
        <HeaderContainer />
        <div className="grid-container">
          <ShowDetailsBannerContainer showId={showId} />
          <EpisodesListContainer showId={showId} />
          <CastProfileContainer showId={showId} />
        </div>
      </div>
    );
  }
}

ShowDetails.prototypes = {
  match: PropTypes.objectOf(string).isRequired,
};