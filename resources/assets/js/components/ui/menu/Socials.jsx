import React from 'react';
import PropTypes from 'prop-types'
import Social from  "./Social"
const data =[
    {
            "img":"svg/circle-facebook.svg",
            "alt":"facebook"
       },{

            "img":"svg/twitter.svg",
            "alt":"twitter"
        },{
        "img":"svg/google.svg",
            "alt":"google"
        },{
            "img":"svg/youtube.svg",
            "alt":"youtube"
        }

]

class Socials extends React.Component {

render(){
    return(
        <div className="socials">
            <a href="" className="social__item">
                <img src={`${this.context.appUrl}svg/circle-facebook.svg`} alt="facebook"/>
            </a>

            <a href="" className="social__item">
                <img src={`${this.context.appUrl}svg/twitter.svg`} alt="twitter"/>
            </a>

            <a href="" className="social__item">
                <img src={`${this.context.appUrl}svg/google.svg`} alt="google"/>
            </a>

            <a href="" className="social__item">
                <img src={`${this.context.appUrl}svg/youtube.svg`} alt="youtube"/>
            </a>
            {/*{data.map((social, i) =>*/}
                {/*<Social key={i} {...social} />*/}
            {/*)}*/}
        </div>
        )
    }
}

export default Socials;
Socials.contextTypes ={
    appUrl: PropTypes.string
}