import React from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'
import profile from '../../../assets/images/profile.jpg'

const SignedInLinks = () => {
  return (
    <div className="navbar-capture">
       <img className="navbar-capture__item navbar-capture__profile-image navbar-capture__profile-image--online" src={profile} alt="profile" />
       <img className="navbar-capture__item navbar-capture__profile-image navbar-capture__profile-image--online" src={profile} alt="profile" />
       <img className="navbar-capture__item navbar-capture__profile-image navbar-capture__profile-image--online" src={profile} alt="profile" />
      <button className="navbar-capture__item navbar-capture__share">Share     <i className="fas fa-share"/></button>
      <img className="navbar-capture__item navbar-capture__profile-image" src={profile} alt="profile" />
    </div>
  )
}

export default SignedInLinks
