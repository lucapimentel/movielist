import React, { useState, useEffect } from "react";
import CastProfile from "../CastProfile/CastProfile";
import getCastByShowId from "../CastProfile/helpers/getCastByShowId";
import PaginationContainer from "../Pagination";
import PropTypes from "prop-types";

export default function CastProfileContainer(props) {
  const { showId } = props;
  const [cast, setCast] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [castPerPage] = useState(10);

  useEffect(() => {
    getCastByShowId(showId).then((response) => {
      setCast(response);
    });
  }, [showId]);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  if (cast) {
    const indexOfLastCast = currentPage * castPerPage;
    const indexOfFirstCast = indexOfLastCast - castPerPage;
    const currentCast = cast.slice(indexOfFirstCast, indexOfLastCast);

    return (
      <>
        <div className="container">
          <CastProfile data={currentCast} />
          <PaginationContainer
            dataPerPage={castPerPage}
            totalData={cast.length}
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

CastProfileContainer.prototypes = {
  showId: PropTypes.number.isRequired,
};
