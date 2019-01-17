import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Profile } from 'components';
import { Home } from "containers";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
