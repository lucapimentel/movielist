import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import ShowDetails from "./pages/ShowDetails/ShowDetails";
import "./assets/sass/main.scss";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/details/:showId" component={ShowDetails} />
    </HashRouter>
  );
}

export default App;
