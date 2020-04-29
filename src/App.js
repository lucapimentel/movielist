import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./assets/sass/main.scss";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/blogpost/:postIndex" component={BlogPost} /> */}
    </HashRouter>
  );
}

export default App;
