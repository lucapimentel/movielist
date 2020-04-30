import React, { useState, useEffect } from "react";
import EpisodesList from "../EpisodesList/EpisodesList";
import PaginationContainer from "../Pagination";
import getEpisodesByShowId from "../EpisodesList/helpers/getEpisodesByShowId";
import PropTypes from "prop-types";

export default function EpisodesListContainer(props) {
  const { showId } = props;
  const [episodes, setEpisodes] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [episodesPerPage] = useState(10);

  useEffect(() => {
    getEpisodesByShowId(showId).then((response) => {
      setEpisodes(response);
    });
  }, [showId]);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  if (episodes) {
    const indexOfLastEpisode = currentPage * episodesPerPage;
    const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
    const currentEpisodes = episodes.slice(
      indexOfFirstEpisode,
      indexOfLastEpisode
    );

    return (
      <>
        <EpisodesList data={currentEpisodes} />
        <PaginationContainer
          dataPerPage={episodesPerPage}
          totalData={episodes.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </>
    );
  } else {
    return "";
  }
}

EpisodesListContainer.prototypes = {
  showId: PropTypes.number.isRequired,
};
