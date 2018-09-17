import React, { Component } from 'react';

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
    return (
      <div>
        <Navbar />
        <Cover />
        <About />
        <Work />
        <Resume />
        <Contact />
      </div>
    );
  }
}
