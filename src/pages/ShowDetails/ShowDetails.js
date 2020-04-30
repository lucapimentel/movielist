import React, { Component } from "react";
import ShowDetailsBannerContainer from "../../components/ShowDetailsBanner";
import EpisodesListContainer from "../../components/EpisodesList";
import CastProfileContainer from "../../components/CastProfile";
import HeaderContainer from "../../components/Header";

export default class ShowDetails extends Component {
  render() {
    const { showId } = this.props.match.params;
    return (
      <div data-test="showdetails" className="page-container">
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
