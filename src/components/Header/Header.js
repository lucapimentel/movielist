import React from "react";
import logo from "../../assets/images/logo.jpg";
import { useHistory } from "react-router-dom";

export default function Header() {
  let history = useHistory();
  return (
    <div data-test="header">
      <header>
        <div className="header-container">
          <div className="header-content">
            <img
              src={logo}
              alt=""
              onClick={() => {
                history.push("/");
              }}
            />
            <div className="header-links">
              <div className="header-link-item">People</div>
              <div className="header-link-item">Network</div>
              <div className="header-link-item">Articles</div>
              <div className="header-link-item">Forum</div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
