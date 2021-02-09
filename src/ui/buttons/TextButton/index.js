import React from 'react'
import './style.scss'

const TextButton = ({ text }) => {

  return (
    <div>
      <button className="text-button">{ text }</button>
    </div>
  )
}

export default TextButton
