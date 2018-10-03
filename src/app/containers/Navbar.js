import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
          <NavLink to="/" className="navbar-brand" activeClassName="">
            <p>DN</p>
          </NavLink>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav onClick={this.close} className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  to="/about"
                  className="nav-link"
                  activeClassName="isActive"
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/work"
                  className="nav-link"
                  activeClassName="isActive"
                >
                  Work
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/resume"
                  className="nav-link"
                  activeClassName="isActive"
                >
                  Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/contact"
                  className="nav-link"
                  activeClassName="isActive"
                >
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
