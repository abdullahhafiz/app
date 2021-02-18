import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AboutUs } from './pages/About/AboutUs';
import { Career } from './pages/career/career';
import { Contact } from './pages/contact/contact';
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
          <Route exact path = '/about' component={AboutUs} />
          <Route exact path = '/career' component={Career} />
          <Route exact path='/contact' component={Contact} />

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
