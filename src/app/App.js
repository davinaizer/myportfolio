import React, {Component} from 'react';
import {Container} from 'reactstrap';

import Navbar from './components/Navbar';
import Cover from './components/Cover';
import About from './components/About';
import Projects from './components/Projects';
import Curriculum from './components/Curriculum';
import Contact from './components/Contact';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid>
        <Navbar />
        <hr />
        <Cover />
        <hr />
        <About />
        <hr />
        <Projects />
        <hr />
        <Curriculum />
        <hr />
        <Contact />
      </Container>
    );
  }
}
