import React from 'react'
import './style.scss'
import comment from '../../../assets/images/comment.png'
import annotate from '../../../assets/images/annotate.png'
import share from '../../../assets/images/share.png'

const UpgradeSection = () => {
  return (
    <div className="upgrade-section">
      <div className="upgrade-section__features">
        <div className="upgrade-section__card">
          <img className="upgrade-section__img" src={ comment } alt="comment"/>
          <div className="upgrade-section__name">Comment</div>
        </div>
        <div className="upgrade-section__card">
          
        <img className="upgrade-section__img" src={ annotate } alt="comment"/>
          <div className="upgrade-section__name">Annotate</div>
        </div>
        <div className="upgrade-section__card">
          <img className="upgrade-section__img" src={ share } alt="comment"/>
          <div className="upgrade-section__name">Share</div>
        </div>
      </div>
      <div className="upgrade-section__button">
        <button className="navbar-capture__item navbar-capture__upgrade">Upgrade for more features</button>
        <button></button>
      </div>
    </div>
  )
}

export default UpgradeSection
