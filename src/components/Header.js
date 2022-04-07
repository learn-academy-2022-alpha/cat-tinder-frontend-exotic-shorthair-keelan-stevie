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

class Header extends Component{
  render(){
    return(
        <div>
          <h1>hello world</h1>
          <Navbar color="light" expand="md" fixed="top" light>
            <NavbarBrand href="/">CAT TINDER!</NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() {}} />
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="./pages/CatIndex">See Cats</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/learn-academy-2022-alpha/cat-tinder-frontend-exotic-shorthair-keelan-stevie.git">
                    SEE THE CODE
                  </NavLink>
                </NavItem>
              </Nav>
              <NavbarText>Meow ;)</NavbarText>
            </Collapse>
          </Navbar>
        </div>
    )
  }
}

export default Header