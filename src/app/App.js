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

    this.onSelect = this.onSelect.bind(this);
    this.state = {
      currentSection: '',
    };
  }

  onSelect(evt) {
    evt.preventDefault();

    let target = evt.currentTarget || evt.target;
    let selectedId = target.href && target.href.split('#')[1];

    this.setState(prevState => ({
      currentSection: selectedId,
    }));
  }

  render() {
    let component = '';
    switch (this.state.currentSection) {
      case 'home':
        component = <Cover onSelect={this.onSelect} />;
        break;
      case 'about':
        component = <About />;
        break;
      case 'work':
        component = <Work />;
        break;
      case 'resume':
        component = <Resume />;
        break;
      case 'contact':
        component = <Contact />;
        break;
      default:
        component = <Cover onSelect={this.onSelect} />;
    }

    //reset scroll
    window.scrollTo(0, 0);

    return (
      <div>
        <Navbar onSelect={this.onSelect} />
        {component}
      </div>
    );
  }
}
