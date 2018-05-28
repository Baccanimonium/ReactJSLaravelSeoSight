import React from 'react'
import PropTypes from 'prop-types'


const Indicator =(slidesData)=> {
    const  {id,title} = slidesData.data
        return (

                <div className="content" >
                    <div className="text-wrap">
                        <h4 className="slides-title" dangerouslySetInnerHTML={{__html: title}}></h4>
                    </div>
                    <div className="slides-number">0{id}</div>
                </div>
        )
}

export default Indicator;