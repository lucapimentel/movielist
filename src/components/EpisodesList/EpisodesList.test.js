import React from "react";
import { render } from "@testing-library/react";
import EpisodesList from "../EpisodesList/EpisodesList";

it("should render EpisodesList component without error", () => {
  const defaultProps = {
    data: [
      {
        airdate: "2014-01-11",
        number: "1",
        season: "1",
        url: "http://www.tvmaze.com/episodes/100/bitten-1x01-summons",
        name: "Summons",
      },
    ],
  };
  render(<EpisodesList {...defaultProps} />);
});
