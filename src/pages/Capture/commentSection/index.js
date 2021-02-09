import React from 'react'
import './style.scss'
import profile from '../../../assets/images/profile.jpg'

const CommentSection = ({ captureInfo }) => {
  return (
    <div className="comment-section">
      <div className="comment-section__textbox">
        <p className="align-left">{ captureInfo.author } <span className="grey-text">{`Captured ${captureInfo.duration} ago`}</span></p>
        <p className="align-right"><span className="grey-text">{ captureInfo.viewed }</span><i className="grey-icon fas fa-eye" /></p>
        <div style={{ clear: "both" }}></div>
      </div>
      <div className="comment-section__border">
        <hr /> 
      </div>
      <div className="comment-section__textbox">
        <p className="align-left comment-section__textbox--left">
          <div className="comment-section__comment-num">1</div>
          <img className="comment-section__profile" src={profile} alt="profile" />
          { captureInfo.author } 
          <span className="grey-text">Yesterday</span>
        </p>
        <p className="align-right"><span className="grey-text"></span><i className="grey-icon fas fa-ellipsis-h" /></p>
        <div style={{ clear: "both" }}></div>
      </div>
      <div className="comment-section__textarea">
        <textarea className="textarea textarea__comment" placeholder="Comment for free!"></textarea>
      </div>
      <div className="comment-section__textbox">
        <p className="align-left">Add Your Email</p>
        <p className="align-right grey-text">Max 150 Char.</p>
        <div style={{ clear: "both" }}></div>
      </div>
      <div className="comment-section__textarea">
        <textarea className="textarea textarea__email" placeholder="You@Yourcompany.com"></textarea>
      </div>
      <div className="comment-section__message">
        <p>I think this button could be the larger one from the system.</p>
      </div>
      <div className="comment-section__buttons">
        <button className="comment-section__post">Post</button>
        <button className="comment-section__cancel">Cancel</button>
      </div>
      <div className="comment-section__border">
        <hr /> 
      </div>
      <div className="comment-section__copy-link">
        <button className="comment-section__copy">Copy Link <i className="fas fa-link"/></button>
        <span>Copy & Paste into Slack!</span>
      </div>

    </div>
  )
}

export default CommentSection
