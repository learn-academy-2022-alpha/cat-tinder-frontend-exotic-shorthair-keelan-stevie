import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

class Footer extends Component{
  render(){
    return(
      <div>
      <Navbar color="light" expand="md" fixed="bottom" light>
        <NavbarBrand href="/">Thanks for trying our app!</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Random Link Here</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Another Random Link
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Keelan and Stevie LLC</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    )
  }
}

export default Footer