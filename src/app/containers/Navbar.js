import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import './Navbar.scss';

import brandImg from '../img/nav_brand.svg';

export default class TopNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  close() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    return (
      <div>
        <Navbar className="app-navbar" fixed="top" expand="md">
          <Link to="/">
            <img
              src={brandImg}
              className="navbar-brand"
              width="40"
              height="40"
              alt="Home"
            />
          </Link>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav onClick={this.close} className="ml-auto" navbar>
              <NavItem>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/work" className="nav-link">
                  Work
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/resume" className="nav-link">
                  Resume
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
