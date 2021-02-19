import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AboutUs } from './pages/About/AboutUs';
import { Career } from './pages/career/career';
import { Contact } from './pages/contact/contact';
import { Hero } from './pages/Home/component/Hero';
import { Footer } from './pages/shared/Footer';
import { Header } from './pages/shared/Header'
function App() {
  return (
     <div>
     <Router>
       <Fragment>
        <div>
           <Header />
         </div>
         <Route exact path = '/' component={Hero} />
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
