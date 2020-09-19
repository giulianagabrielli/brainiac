import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Leakages from "./pages/Leakages";
import Urls from "./pages/Urls";
import SearchLeakages from "./pages/SearchLeakages";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/landing" exact component={Landing} />
      <Route path="/leakages" component={Leakages} />
      <Route path="/urls" component={Urls} />
      <Route path="/searchleakages" component={SearchLeakages} />
    </BrowserRouter>
  );
}

export default Routes;
