import React, { useState, useEffect } from "react";
import ShowDetailsBanner from "../ShowDetailsBanner/ShowDetailsBanner";
import getShowById from "../ShowDetailsBanner/helpers/getShowById";
import PropTypes from "prop-types";

export default function ShowDetailsBannerContainer(props) {
  const { showId } = props;
  const [show, setShow] = useState();
  const [showCrew, setShowCrew] = useState();

  useEffect(() => {
    getShowById(showId).then((response) => {
      const creator = response._embedded.crew.find(function (person) {
        return person.type === "Creator" || person.type === "Developer";
      });
      setShow(response);
      setShowCrew(creator);
    });
  }, [showId]);

  if (show) {
    const {
      name,
      summary,
      status,
      type,
      image,
      genres,
      schedule,
      runtime,
      officialSite,
      rating,
      network,
    } = show;
    return (
      <ShowDetailsBanner
        name={name}
        summary={summary}
        status={status}
        type={type}
        image={image.original}
        genres={genres.join(",")}
        day={schedule.days.join(",")}
        time={schedule.time}
        runtime={runtime}
        officialSite={officialSite}
        rating={rating.average}
        network={network.name}
        creator={showCrew ? showCrew.person.name : ""}
      />
    );
  } else {
    return "";
  }
}

ShowDetailsBannerContainer.prototypes = {
  showId: PropTypes.number.isRequired,
};
