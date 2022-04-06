import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul>
          <NavLink to="/">&copy; 2022 Keelan & Stevie</NavLink>
        </ul>
        <ul>
          <NavLink to="/catindex">Local Cats in your area</NavLink>
        </ul>
        <ul>
          <NavLink to="/catnew">submit Cats</NavLink>
        </ul>
      </footer>
    )
  }
}
export default Footer