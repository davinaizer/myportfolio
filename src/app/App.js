import './App.scss';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About, Cover, Contact, Navbar, Resume, Work } from './containers';
import { ScrollToTop } from './components';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router basename="">
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Cover} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}
