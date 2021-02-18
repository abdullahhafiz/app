import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AboutUs } from './pages/About/About';
// import { Apply } from './pages/career/components/Apply';
import { Footer } from './pages/shared/footer';
import { Header } from './pages/shared/header'
function App() {
  return (
    <div>
    <Router>
      <Fragment>
        <div>
          <Header />
        </div>
        <Switch>
          <Route exact path = '/about' component={AboutUs}></Route>
        </Switch>
        <div>
          <Footer />
        </div>
      </Fragment>
    </Router>
    </div>
  );
}

export default App;
