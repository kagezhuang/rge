import React from 'react'
import './style.scss'

const ToolGroup = ({ tools }) => {
  return (
    <div className="tool-group">
      { tools.map((tool, idx) => (
        <button className={`tool-group__button ${tool.icon && "tool-group__button--icon"}`} key={idx}>
          {tool.icon && 
            <i className={`tool-group__icon ${tool.icon}`}></i>
          }
          { tool.text }
        </button>
      ))}
    </div>
  )
}

export default ToolGroup
