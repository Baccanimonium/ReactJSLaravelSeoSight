import React from 'react'
import PropTypes from 'prop-types'


const Indicator =(slidesData)=> {

    return (
        <li className= {slidesData.active ?"swiper-pagination-bullet swiper-pagination-bullet-active" : "swiper-pagination-bullet"}
            onClick={(e) =>slidesData.onClick(slidesData.i, e)}
        ></li>
    )
}

export default Indicator;