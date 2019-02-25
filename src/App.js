import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, Loader } from 'components';
import { Home } from 'containers';

import './App.scss';

function App() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <div>
            <Header currentLocation={location.pathname} />
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route render={() => <Loader />} />
            </Switch>
          </div>
        )}
      />
    </Router>
  );
}

export default App;
