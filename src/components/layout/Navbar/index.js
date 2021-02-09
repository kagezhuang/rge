import React from 'react'
import './style.scss'
// react router and components
import { NavLink } from 'react-router-dom'
// import SignedOutLinks from '../../auth/SignedOutLinks';
import SignedInLinks from '../../auth/SignedInLinks';
import logo from '../../../assets/icons/logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="navbar__item navbar__left">
        <img className="navbar__logo" src={ logo } alt="logo" />
        Really Good Emails
      </NavLink>
      <div className="navbar__center">
        <NavLink to='/explore' className="navbar__item">Explore</NavLink>
        <NavLink to="/Learn" className="navbar__item">Learn</NavLink>
        <NavLink to="Capture" className="navbar__item">Capture</NavLink>
      </div>
      <SignedInLinks className="navbar__right" />
    </div>
  )
}

export default Navbar