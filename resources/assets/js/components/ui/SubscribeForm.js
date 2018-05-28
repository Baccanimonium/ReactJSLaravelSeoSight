import React, {Component} from 'react'
import ReactInview from 'react-inview-js'
import PropTypes from 'prop-types'

class SubscribeForm extends Component {
    render() {
        const gearStyle = this.props.elementIsInView ? {opacity: '1', transform: 'rotateZ(360deg)'} : {opacity: '0', transform: 'rotateZ(0deg)'}
        const mail1 = this.props.elementIsInView ? {opacity: '1', bottom: '0px'} : {opacity: '0', bottom: '-332px'}
        const mail2 = this.props.elementIsInView ? {opacity: '1', right: '20px'} : {opacity: '0', right: '-1170px'}
        return (
            <div className="container-fluid bg-green-color">
                <div className="row">
                    <div className="container">

                        <div className="row">

                            <div className="subscribe scrollme">

                                <div className="col-lg-6 col-lg-offset-5 col-md-6 col-md-offset-5 col-sm-12 col-xs-12">
                                    <h4 className="subscribe-title">Email Newsletters!</h4>
                                    <form className="subscribe-form" method="post" action="import.php">
                                        <input className="email input-standard-grey input-white" name="email"
                                               required="required" placeholder="Your Email Address" type="email"/>
                                        <button className="subscr-btn">subscribe
                                            <span className="semicircle--right"></span>
                                        </button>
                                    </form>
                                    <div className="sub-title">Sign up for new Seosignt content, updates, surveys & offers.
                                    </div>

                                </div>

                                <div className="images-block">
                                    <img src={`${this.context.appUrl}img/subscr-gear.png`} style={gearStyle} alt="gear" className="gear transitionAll"/>
                                    <img src={`${this.context.appUrl}img/subscr1.png`} style={mail1} alt="mail" className="mail transitionAll"/>
                                    <img src={`${this.context.appUrl}img/subscr-mailopen.png`} style={mail2} alt="mail" className="mail-2 transitionAll"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const InviewOptions = {offsetY: 0.7, showGuides: false, fullElementInView: false}

export default ReactInview(InviewOptions)(SubscribeForm)

SubscribeForm.contextTypes ={
    appUrl: PropTypes.string
}