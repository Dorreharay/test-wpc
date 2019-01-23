import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Profile, Header } from 'components';
import { Home } from 'containers';

import './App.scss';

function App() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <div>
            {location.pathname === '/' ? null : <Header currentLocation={location.pathname} />}
            {/* <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={{ enter: 300, exit: 300 }}
              classNames='fade'
            > */}

            <Switch location={location}>
              <Route exact path="/orders" component={Home} />
              <Route exact path="/profile" component={Profile} />
              <Route render={() => <div style={{ marginLeft: '47%', marginTop: '20%' }}>Not Found</div>} />
            </Switch>

            {/* </CSSTransition>
          </TransitionGroup> */}
          </div>
        )}
      />
    </Router>
  );
}

export default App;
