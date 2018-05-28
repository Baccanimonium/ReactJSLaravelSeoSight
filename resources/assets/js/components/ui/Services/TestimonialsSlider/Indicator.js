import React, {Component} from 'react'
import PropTypes from 'prop-types'



const Indicator =(slidesData)=> {
    return (
        <li className= {slidesData.active ?"slide-nav-btn forWhiteBackgroundActiveBullet" : "slide-nav-btn grayBackGround"}onClick={(e) =>slidesData.onClick(slidesData.i, e)}></li>
    )
}

export default Indicator;
