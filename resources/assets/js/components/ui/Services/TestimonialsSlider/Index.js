import React, {Component} from 'react'
import {connect} from 'react-redux'
import Carousel from '../../../decorators/Carousel'
import {loadLatestTestimonials} from "../../../../actionCreators/index"
import Indicator from './Indicator'
import TestimoniaslItem from './TestimonialsItem'
import PropTypes from 'prop-types'

class TestimonialsSlider extends Component {
    constructor(props){
        super(props)
        this.state = {
            testimonialsLoadCount :3,
            slidingAnimationEnd: true,
            noTransition: false,
            autoSwipeDelay: 5000
        }
    }
    componentWillMount(){
        const { dispatchLoadLatestTestimonials} = this.props
        const {loaded, loadedPartOfTestimonials} = this.props.recentTestimonials
        if (!loaded && !loadedPartOfTestimonials) dispatchLoadLatestTestimonials(this.state.testimonialsLoadCount)
    }

    render() {
        const {handleIndicatorClick, transitionStyle} =this.props
        const {testimonials} = this.props.recentTestimonials
        const navPosition ={left: '0px',bottom: '0px', zIndex: '5'}
        return (
            <div className="container-fluid">
                <div className="row medium-padding120 bg-border-color">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">

                                <div className="testimonial-arrow-slider">

                                    <div className="heading">
                                        <h4 className="h1 heading-title">Testimonials</h4>

                                        <div className="heading-line">
                                            <span className="short-line"></span>
                                            <span className="long-line"></span>
                                        </div>
                                    </div>

                                    <div className="swiper-container pagination-bottom">

                                        <div className="swiper-wrapper" style={transitionStyle}>
                                            {testimonials.map((child, index) => (
                                                    <TestimoniaslItem
                                                        key={ index }
                                                        data={child}
                                                        appUrl={this.context.appUrl}
                                                    />

                                            ))}
                                        </div>

                                        {/*<!-- If we need pagination -->*/}
                                        <ul id="nav-btns" style={navPosition}>
                                            {testimonials.map((child, index) => (
                                                <Indicator
                                                    key={index}
                                                    data={child}
                                                    i={index}
                                                    active={this.props.position === index}
                                                    onClick={(e) => handleIndicatorClick(e)}
                                                />
                                            ))}
                                        </ul>

                                    </div>

                                </div>
                            </div>


                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="heading mb60">
                                    <h4 className="h1 heading-title">Accordion</h4>

                                    <div className="heading-line">
                                        <span className="short-line"></span>
                                        <span className="long-line"></span>
                                    </div>

                                </div>

                                <ul className="accordion" id="accordion">

                                    <li className="accordion-panel">
                                        <div className="panel-heading">
                                            <a href="#toggleSample"
                                               className="accordion-heading collapsed"
                                               data-toggle="collapse"
                                               data-parent="#accordion"
                                               aria-expanded="false"
                                            >
                                        <span className="icon">
                                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            <i className="fa fa-angle-down active" aria-hidden="true"></i>
                                        </span>
                                                <span className="ovh">Qectores Legere Melius</span>
                                            </a>
                                        </div>

                                        <div id="toggleSample" className="panel-collapse collapse" aria-expanded="false" role="tree">
                                            <div className="panel-info">
                                                Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum
                                                investigationes demonstraverunt.
                                            </div>
                                        </div>
                                    </li>

                                    <li className="accordion-panel">

                                        <div className="panel-heading">

                                            <a href="#toggleSecond"
                                               className="accordion-heading collapsed"
                                               data-toggle="collapse"
                                               data-parent="#accordion"
                                               aria-expanded="false"
                                            >
                                        <span className="icon">
                                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            <i className="fa fa-angle-down active" aria-hidden="true"></i>
                                        </span>
                                                <span className="ovh">Nam Liber Tempor Cum Soluta</span>
                                            </a>
                                        </div>

                                        <div id="toggleSecond" className="panel-collapse collapse" aria-expanded="false" role="tree">
                                            <div className="panel-info">
                                                Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum
                                                investigationes demonstraverunt.
                                            </div>
                                        </div>
                                    </li>


                                    <li className="accordion-panel">

                                        <div className="panel-heading">
                                            <a href="#toggleThird"
                                               className="accordion-heading collapsed"
                                               data-toggle="collapse"
                                               data-parent="#accordion"
                                               aria-expanded="false"
                                            >
                                        <span className="icon">
                                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            <i className="fa fa-angle-down active" aria-hidden="true"></i>
                                        </span>
                                                <span className="ovh">Eodem Modo Quinunc Nobis Videntur</span>
                                            </a>
                                        </div>

                                        <div id="toggleThird" className="panel-collapse collapse" aria-expanded="false" role="tree">
                                            <div className="panel-info">
                                                Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum
                                                investigationes demonstraverunt.
                                            </div>
                                        </div>

                                    </li>

                                    <li className="accordion-panel">

                                        <div className="panel-heading">
                                            <a href="#toggleFourth"
                                               className="accordion-heading collapsed"
                                               data-toggle="collapse"
                                               data-parent="#accordion"
                                               aria-expanded="false"
                                            >
                                        <span className="icon">
                                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            <i className="fa fa-angle-down active" aria-hidden="true"></i>
                                        </span>
                                                <span className="ovh">Mirum Quam Littera Gothica</span>
                                            </a>
                                        </div>

                                        <div id="toggleFourth" className="panel-collapse collapse" aria-expanded="false" role="tree">
                                            <div className="panel-info">
                                                Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum
                                                investigationes demonstraverunt.
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        recentTestimonials: state.testimonials
    }
}
const mapToDispatch ={
    dispatchLoadLatestTestimonials: loadLatestTestimonials
}


export default connect(mapStateToProps, mapToDispatch)(Carousel(TestimonialsSlider))

TestimonialsSlider.contextTypes ={
    appUrl: PropTypes.string
}