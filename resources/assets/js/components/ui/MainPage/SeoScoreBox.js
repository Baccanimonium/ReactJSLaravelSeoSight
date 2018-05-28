import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactInview from 'react-inview-js'

class SeoScoreBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            website: '',
            email: ''
        }
    }

    handleWebsiteChange(ev){
        this.setState({
            website: ev.target.value
        })
    }
    handleEmailChange(ev){
        this.setState({
            email: ev.target.value
        })
    }
    render() {
        const upperImgStyle={
            opacity: this.props.elementIsInView ? '1' : '0',
            top: this.props.elementIsInView ? '-10px' : '-100px' ,

        }
        const loweImgStyle={
            opacity: this.props.elementIsInView ? '1' : '0',
            bottom: this.props.elementIsInView ? '0px': '-647.4px'
        }
        return (
            <div className="container-fluid">
                <div className="row">

                    <div className="seo-score scrollme">

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-xs-12 col-sm-12">
                                    <div className="seo-score-content align-center">

                                        <div className="heading align-center">
                                            <h4 className="h1 heading-title">Your Seo Score?</h4>
                                            <p className="heading-text">Check your website’s SEO problems for free!</p>
                                        </div>

                                        <div className="contact-form">

                                            <form className="seo-score-form input-inline">

                                                <div className="row">

                                                    <div className="col-lg-8 no-padding col-md-12 col-xs-12 col-sm-12">
                                                        <input className="input-dark site" required="required" placeholder="Type in your Website URL"
                                                               value = {this.state.website}
                                                               onChange = {(e) =>this.handleWebsiteChange(e)}
                                                        />
                                                    </div>
                                                    <div className="col-lg-4 no-padding col-md-12 col-xs-12 col-sm-12">
                                                        <input className="input-dark e-mail" required="required" placeholder="Your Email" type="email"
                                                               value = {this.state.email}
                                                               onChange = {(e) =>this.handleEmailChange(e)}
                                                        />
                                                    </div>

                                                </div>

                                                <button className="btn btn-medium btn--green btn-hover-shadow">
                                                    <span className="text">Check Up!</span>
                                                    <span className="semicircle"></span>
                                                </button>

                                            </form>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="images">
                            <img className="transitionAll" src="img/seoscore1.png" alt="image" style={upperImgStyle}/>
                            <img className="transitionAll"  src="img/seoscore2.png" alt="image" style={loweImgStyle}/>
                            <img className="transitionAll" src="img/seoscore3.png" alt="image" style={loweImgStyle}/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
const InviewOptions = {offsetY: 0.5, showGuides: false, fullElementInView: false}

export default ReactInview(InviewOptions)(SeoScoreBox);