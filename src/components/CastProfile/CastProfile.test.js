import React from "react";
import { render } from "@testing-library/react";
import CastProfile from "../CastProfile/CastProfile";

it("should render CastProfile component without error", () => {
  const defaultProps = {
    showId: 3,
    data: [
      {
        character: {
          name: "Norrie Calvert-Hill",
        },

        person: {
          name: "Mackenzie Lintz",
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/3/7816.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/3/7816.jpg",
          },
        },
      },
    ],
  };
  render(<CastProfile {...defaultProps} />);
});
