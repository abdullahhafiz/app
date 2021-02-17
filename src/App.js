import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './pages/shared/header'
function App() {
  return (
    <div>
    <Router>
      <Fragment>
        <div>
          <Header></Header>
        </div>

        <Switch>
          <Route exact path = '/about'></Route>
        </Switch>
      </Fragment>
    </Router>

    </div>
  );
}

export default App;
