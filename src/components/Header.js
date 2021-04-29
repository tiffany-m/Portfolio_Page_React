import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div classNameName="container">
            <div classNameName="row">
              <div classNameName="col">
                <h1>Tiffany Mollica</h1>
                <h4>designer - developer - dreamer :)</h4>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Navbar light sticky="top" expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/about">
                    <i className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contact">
                    <i className="fa fa-question-circle fa-lg" /> About Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
