import React, { useState, useEffect } from "react";
import Grid from "../Grid/Grid";
import SearchBarContainer from "../../components/SearchBar";
import ApiHelper from "../../data/helper/ApiHelper";

export default function GridContainer() {
  const [movies, setMovies] = useState();

    useEffect(() => {
      ApiHelper.get("http://api.tvmaze.com/shows", "").then(function (
        response
      ) {
        setMovies(response.slice(1, 10));
      });
    }, []);

  function handleSearchSubmit(value) {
    ApiHelper.get("http://api.tvmaze.com/search/shows", value).then(function (
      response
    ) {
      let arrayOfMovies = Array.from(response, function (element) {
        return element.show;
      });
      setMovies(arrayOfMovies);
    });
  }

  return (
    <>
      <SearchBarContainer searchSubmit={handleSearchSubmit} />
      <Grid data={movies} />
    </>
  );
}
