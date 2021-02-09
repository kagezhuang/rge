import React from 'react'
import './style.scss'
// import components
import { NavLink } from 'react-router-dom'

const EmailInfo = () => {
  return (
    // <div className="email-info">
      <table className="email-info">
        <tr className="email-info__title">
          <td className="email-info__title-name" colSpan="2">Wildist - 12/15/2020</td>
          <td className="email-info__title-edit"><i className="fas fa-pen" /></td>
        </tr>
        <tr className="email-info__row">
          <td colSpan="3"><hr className="email-info__line" /></td>
        </tr>
        <tr className="email-info__row">
          <td className="email-info__row-name">From:</td>
          <td className="email-info__from-content"><NavLink to='/'>Wildist</NavLink> on December 15, 2020</td>
          <td className="email-info__row-more"><NavLink to='/'>More info</NavLink></td>
        </tr>
        <tr className="email-info__row">
          <td className="email-info__row-name">Subject:</td>
          <td className="email-info__row-content" colSpan="2">Free Wildlife Photography Webinar with Charly Savely and Alex Strohl</td>
        </tr>
        <tr className="email-info__row">
          <td className="email-info__row-name">Preheader:</td>
          <td className="email-info__row-content" colSpan="2">Markup your calendar, grab a cup of coffee, and join us for a free webinar with ...</td>
        </tr>
      </table>
    // </div>
  )
}

export default EmailInfo
