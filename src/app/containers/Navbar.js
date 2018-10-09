import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import './Navbar.scss';

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
    const { links } = this.props;
    const navLinks = links.filter(item => item.isVisible !== false);

    return (
      <div>
        <Navbar className="app-navbar" fixed="top" expand="md">
          <NavLink to="/" className="navbar-brand" activeClassName="">
            <p>DN</p>
          </NavLink>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav onClick={this.close} className="ml-auto" navbar>
              {navLinks.map(link => (
                <NavItem key={link.path}>
                  <NavLink
                    to={link.path}
                    className="nav-link"
                    activeClassName="isActive"
                  >
                    {link.title}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

TopNav.propTypes = {
  links: PropTypes.array,
};
