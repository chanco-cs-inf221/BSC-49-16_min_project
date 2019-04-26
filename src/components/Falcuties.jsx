import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './Falcuties.css'

export default class Falcuties extends Component {
  render() {
    return (
      <div>
        <NavLink to="/Falcuty/Sciences" className="falcutySC">SCIENCE</NavLink>
        <NavLink to="/Falcuty/SocialScience" className="falcutySS">SOCIAL SCIENCE </NavLink>
      </div>
    )
  }
}
