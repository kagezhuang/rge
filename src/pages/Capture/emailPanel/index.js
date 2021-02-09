import React from 'react'
import './style.scss'
// import components
import EmailInfo from './emailInfo'
import email from '../../../assets/images/email.png'

const EmailPanel = () => {
  return (
    <div className="email-panel">
      <EmailInfo />
      <img src={ email } alt="email" />
    </div>
  )
}

export default EmailPanel
