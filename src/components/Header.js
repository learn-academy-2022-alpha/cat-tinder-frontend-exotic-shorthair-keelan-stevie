import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

class Header extends Component{
  render(){
    return(
        <div>
          <Navbar color="light" expand="md" fixed="top" light>
            <NavbarBrand href="/">CAT TINDER!</NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() {}} />
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="./pages/CatIndex">See Cats1</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/learn-academy-2022-alpha/cat-tinder-frontend-exotic-shorthair-keelan-stevie.git">
                    SEE THE CODE
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Submit a Cat</DropdownItem>
                    <DropdownItem>Edit a Cat</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>no u</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <NavbarText>Meow ;)</NavbarText>
            </Collapse>
          </Navbar>
        </div>
    )
  }
}

export default Header