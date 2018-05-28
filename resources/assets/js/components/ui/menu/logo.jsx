import React from 'react';
import PropTypes from 'prop-types'
class Logo extends React.Component{
    render(){
        return(
        <div className="logo">
            <a href="index.html" className="full-block-link"></a>
            <img src={`${this.context.appUrl}img/logo-eye.png`} alt="Seosight"/>
            <div className="logo-text">
                <div className="logo-title">Seosight</div>
                <div className="logo-sub-title">SEO, Digital Marketing</div>
            </div>
        </div>
        )
    }
}

export default Logo

Logo.contextTypes ={
    appUrl: PropTypes.string
}