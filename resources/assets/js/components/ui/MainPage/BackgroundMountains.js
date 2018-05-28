import React, {Component} from 'react'
import ReactInview from 'react-inview-js'

class BackgroundMountains extends Component{

    render(){
    const firstMountainStyle = this.props.elementIsInView ? {opacity: '1', bottom: '0px', paddingBottom : '10%'} : {opacity: '0', bottom: '-985.2px', paddingBottom : '0px'}
    const secondMountainStyle = this.props.elementIsInView ? {opacity: '1', bottom: '0px'} : {opacity: '0', bottom: '-985.2px'}
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="background-mountains medium-padding120 scrollme">

                        <div className="images">
                            <img className="transitionAll" src="img/mountain1.png" alt="mountain" style={firstMountainStyle}/>
                            <img className="transitionAll" src="img/mountain2.png" alt="mountain" style={secondMountainStyle}/>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
                                    <div className="heading align-center">
                                        <h4 className="h1 heading-title">Affordable SEO Services Packages</h4>
                                        <div className="heading-line">
                                            <span className="short-line"></span>
                                            <span className="long-line"></span>
                                        </div>
                                        <p className="heading-text">Claritas est etiam processus dynamicus, qui sequitur mutationem
                                            consuetudium.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    <div className="info-box--standard-centered">
                                        <div className="info-box-image">
                                            <img src="img/info-box7.png" alt="image"/>
                                        </div>
                                        <div className="info-box-content">
                                            <h4 className="info-box-title">Objective</h4>
                                            <p className="text">Investigationes demonstraverunt lectores legere.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    <div className="info-box--standard-centered">
                                        <div className="info-box-image">
                                            <img src="img/info-box8.png" alt="image"/>
                                        </div>
                                        <div className="info-box-content">
                                            <h4 className="info-box-title">Strategy</h4>
                                            <p className="text">Dolor sit amet, consectetuer adipiscing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    <div className="info-box--standard-centered">
                                        <div className="info-box-image">
                                            <img src="img/info-box9.png" alt="image"/>
                                        </div>
                                        <div className="info-box-content">
                                            <h4 className="info-box-title">Technology</h4>
                                            <p className="text">Nam liber tempor cum soluta nobis eleifend.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    <div className="info-box--standard-centered">
                                        <div className="info-box-image">
                                            <img src="img/info-box10.png" alt="image"/>
                                        </div>
                                        <div className="info-box-content">
                                            <h4 className="info-box-title">Analytics</h4>
                                            <p className="text">Eodem modo typi, qui nunc nobis videntur parum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row align-center">
                                <div className="btn-block">
                                    <a href="03_services.html" className="btn btn-medium btn--dark">
                                        <span className="text">More Info</span>
                                        <span className="semicircle"></span>
                                    </a>
                                    <a href="03_services.html" className="btn btn-medium btn--breez">
                                        <span className="text">Get Started!</span>
                                        <span className="semicircle"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const InviewOptions = {offsetY: 0.2, showGuides: false, fullElementInView: false}

export default ReactInview(InviewOptions)(BackgroundMountains);
