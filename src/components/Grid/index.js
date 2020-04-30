import React, { useState, useEffect } from "react";
import Grid from "../Grid/Grid";
import SearchBarContainer from "../../components/SearchBar";
import PaginationContainer from "../Pagination";
import getShows from "../Grid/helpers/getShows";
import getShowsByQuery from "../Grid/helpers/getShowsByQuery";

export default function GridContainer() {
  const [shows, setShows] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [showsPerPage] = useState(20);

  useEffect(() => {
    getShows().then((response) => {
      setShows(response);
    });
  }, []);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function handleSearchSubmit(value) {
    getShowsByQuery("q", value).then((response) => {
      let arrayOfShows = Array.from(response, function (element) {
        return element.show;
      });
      setShows(arrayOfShows);
    });
  }

  if (shows) {
    const indexOfLastShows = currentPage * showsPerPage;
    const indexOfFirstShows = indexOfLastShows - showsPerPage;
    const currentShows = shows.slice(indexOfFirstShows, indexOfLastShows);

    return (
      <>
        <SearchBarContainer searchSubmit={handleSearchSubmit} />
        <div className="container">
          <Grid data={currentShows} />
          <PaginationContainer
            dataPerPage={showsPerPage}
            totalData={shows.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </>
    );
  } else {
    return "";
  }
}
