import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import CSS first of all
import './App.scss';

import About from './containers/About';
import Cover from './containers/Cover';
import Contact from './containers/Contact';
import Navbar from './containers/Navbar';
import Resume from './containers/Resume';
import Work from './containers/Work';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //reset window scroll
    window.scrollTo(0, 0);

    return (
      <Router basename="/myportfolio">
        <div>
          <Navbar />

          <Route exact path="/" component={Cover} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}
