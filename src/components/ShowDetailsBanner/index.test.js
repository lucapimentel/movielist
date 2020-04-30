import React from "react";
import { render } from "@testing-library/react";
import ShowDetailsBannerContainer from "../ShowDetailsBanner";

it("should render ShowDetailsBannerContainer component without error", () => {
  const defaultProps = {
    showId: 495,
  };
  render(<ShowDetailsBannerContainer {...defaultProps} />);
});
