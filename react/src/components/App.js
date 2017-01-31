import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default  React.createClass({
  render(){
    return(
      <div>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/unitcreation">Add Unit</NavLink></li>
          <li><NavLink to="/weaponcreation">Add Weapon</NavLink></li>
          {this.props.children}
      </div>
    )
  }
})
