import React from 'react'
import './style.scss'
// import components
import ToolGroup from '../toolGroup'

const ToolBox = ({ toolGroups }) => {
  const last = toolGroups.length - 1
  return (
    <div className="tool-box">
      { toolGroups.map((tg, idx) => (
        <div key={idx}>
          <ToolGroup tools={tg} />
          { idx !== last && <hr className="tool-box__line"></hr>} 
        </div>
      ))}
    </div>
  )
}

export default ToolBox
