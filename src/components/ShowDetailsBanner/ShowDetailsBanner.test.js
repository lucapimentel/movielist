import React from "react";
import { render } from "@testing-library/react";
import ShowDetailsBanner from "../ShowDetailsBanner/ShowDetailsBanner";

it("should render ShowDetailsBanner component without error", () => {
  const defaultProps = {
    name: "Bitten",
    summary: "<p>Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, <b>Bitten</b></p>",
    status: "Ended",
    type: "Scripted",
    image: "http://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg",
    genres: "Drama,Horror,Romance",
    day: "Friday",
    time: "22:00",
    runtime: "runtime",
    officialSite: "http://bitten.space.ca/",
    rating: "7.6",
    network: "CTV Sci-Fi Channel",
    creator: "Grant Rosenberg",
  };
  render(<ShowDetailsBanner {...defaultProps} />);
});
 