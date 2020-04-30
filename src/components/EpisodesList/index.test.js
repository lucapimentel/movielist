import React from "react";
import { render } from "@testing-library/react";
import EpisodesListContainer from "../EpisodesList";

it("should render EpisodesListContainer component without error", () => {
  const defaultProps = {
    showId: 495,
  };
  render(<EpisodesListContainer {...defaultProps} />);
});
