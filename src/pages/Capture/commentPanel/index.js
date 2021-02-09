import React from 'react'
import './style.scss'
// import components
import CommentSection from '../commentSection'
import UpgradeSection from '../upgradeSection'

const CommentPanel = () => {
  const captureInfo = {
    author: 'Mike Nelson',
    duration: '1 min',
    viewed: '23'
  }
  return (
    <div className="comment-panel">
      <div className="comment-panel__top">
        <CommentSection captureInfo={ captureInfo } />
      </div>
      <div className="comment-panel__bottom">
        <UpgradeSection />
      </div>
      
    </div>
  )
}

export default CommentPanel
