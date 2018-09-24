import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

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
    const { onSelect } = this.props;

    return (
      <div>
        <Navbar className="app-navbar" fixed="top" expand="md">
          <NavbarBrand href="#home" onClick={evt => onSelect(evt)}>
            <img src={brandImg} width="40" height="40" alt="Home" />
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav onClick={this.close} className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#about" onClick={evt => onSelect(evt)}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#work" onClick={evt => onSelect(evt)}>
                  Work
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#resume" onClick={evt => onSelect(evt)}>
                  Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact" onClick={evt => onSelect(evt)}>
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
