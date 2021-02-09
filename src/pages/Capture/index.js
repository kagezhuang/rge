import React from 'react'
import './style.scss'
// import components
import ToolPanel from './toolPanel'
import EmailPanel from './emailPanel'
import CommentPanel from './commentPanel'

const Capture = () => {
  return (
    <div className="capture">
      <div className="row">
        <div className="column tool">
          {/* <ToolBox toolGroups={ tgs }/> */}
          <ToolPanel />
        </div>
        <div className="column email">
          <EmailPanel />
        </div>
        <div className="column panel">
          <CommentPanel />
        </div>
      </div>
    </div>
  )
}
export default Capture
