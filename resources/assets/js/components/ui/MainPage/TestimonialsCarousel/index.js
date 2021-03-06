import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Indicator from './Indicator'
import {connect} from 'react-redux'
import {loadLatestTestimonials} from "../../../../actionCreators/index"
import ReactInview from 'react-inview-js'

import Slide from "./Slide"

class TestimonialsCarousel extends Component {
    constructor(props){
        super(props)
        this.state = {
            testimonialsLoadCount :3,
            position: 0,
            slidingAnimationEnd: true,
            noTransition: false,
            autoSwipeDelay: 5000

        }
        this.HandleButtonClick = this.HandleButtonClick.bind(this)
    }
    componentWillMount(){
        const { dispatchLoadLatestTestimonials} = this.props
        const {loaded, loadedPartOfTestimonials} = this.props.recentTestimonials
        if (!loaded && !loadedPartOfTestimonials) dispatchLoadLatestTestimonials(this.state.testimonialsLoadCount)
    }

    componentDidMount(){
        // this.setTimer()
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    setTimer(){

        this.timerID = setInterval(
            () => this.nextSlide(),
            this.state.autoSwipeDelay
        )
    }
    handleMouseEnter(){
        clearInterval(this.timerID)
    }
    handleMouseLeave(){
        this.setTimer()
    }
    HandleButtonClick(i,e){
        e.preventDefault()
        if(this.state.position === i){
            return
        }
        this.setState({
            position: i,
        })
    }
    nextSlide(){
        const {testimonials} = this.props.recentTestimonials
        if (!this.state.slidingAnimationEnd){
            return
        }this.setState({
            slidingAnimationEnd: false
        })

        if(this.state.position < (testimonials.length )){
            this.setState((prevState) => {
                return {
                    position:prevState.position +1
                }
            })
        }
        if(this.state.position >= (testimonials.length -1 )) {
            setTimeout(() => {this.setState({
                    noTransition: true,
                    position: 0
                })}, 300)

        }
        this.setState({
            slidingAnimationEnd: true,
            noTransition: false
        })
    }
    prevSlide(){
        const {testimonials} = this.props.recentTestimonials

        if (!this.state.slidingAnimationEnd){
            return
        }
        this.setState((prevState) => {
            return {
                slidingAnimationEnd: false,
                position: prevState.position -1
            }
        })
        if (this.state.position <= 0){
            this.setState({
                noTransition: true,
                position: testimonials.length
            })
            setTimeout(() => {
                this.setState({
                    noTransition: false,
                    slidingAnimationEnd: true,
                    position: testimonials.length -1
                })
            }, 50)
        }
        this.setState({
            slidingAnimationEnd: true,
        })

    }
    getOpacity(itemIndex){
        return itemIndex===this.state.position ?{ opacity : 1} :{opacity:0}
    }
    render() {
        const {testimonials} = this.props.recentTestimonials
        const divStyle = {
            transition: this.state.noTransition ?'0s':'transform 0.2s ease',
            transform: `translateX(-${this.state.position}00%)`
        }
        const thumbStyle = this.props.elementIsInView?{bottom: '-50px'}: {bottom: '-200px'}
        const gearStyle = this.props.elementIsInView?{top: '-100px'}: {top: '0px'}

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="testimonial-slider scrollme">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="heading">
                                        <h4 className="h1 heading-title">Happy Clients
                                            About Us</h4>
                                        <div className="heading-line">
                                            <span className="short-line bg-yellow-color"></span>
                                            <span className="long-line bg-yellow-color"></span>
                                        </div>
                                        <p className="heading-text c-white">Claritas est etiam processus dynamicus, qui lectorum.
                                        </p>
                                    </div>
                                    <div className="signature js-animate-icon">
                                        {/*<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60">*/}
                                        {/*<path fill="none" stroke="#2f2c2c" stroke-width="1.4"*/}
                                        {/*d="M24.78 42.5C11.28 41.06.96 36 1.16 26.86 1.62 11.6 16.76 3.6 28.13 3.25c5.44-.16 9.8 2.38 10.2 5.8.86 7.66-19.23 15.62-19.23 15.62s17.86-6.57 24.66 2.2c2.8 3.6-11.8 10.65-11.8 10.65s-8.8 3.35-7.65-.24c1.78-5.52 16.8-10.1 18.42-10.3 3.17-.4 7.1-.4 8 .12 1.33.78-1.7 4.14-.94 4.86.76.72 3.82-2.55 3.94-1.97.12.57-.64 2.63.58 3 1.2.38 2.3-1.1 4.28-1.5 1.97-.4 1.83-.44 3.6-.12 1.76.32 2.1.64 3.47 1.4 1.36.74.86 2.22 1.96 1.6 1.1-.6 1.43-4.16 2.44-4.04 1.02.1.03 5.38 1.63 4.5 1.6-.85 4.74-7.97 4.74-7.97s-.82 4.04 0 3.93c3.14-.4 8.12-2.57 14.48-3.36 6.37-.78 8.67-.35 11 .24 1.92.48 2.67 2.3 2.67 2.3"*/}
                                        {/*stroke-linecap="round" stroke-linejoin="round"></path>*/}
                                        {/*<path fill="none" stroke="#2f2c2c" stroke-width="1.4"*/}
                                        {/*d="M113.7 15.75s-1.1-2.78-3.6-2.08c-5.83 1.62-16.2 7.68-16.44 15.63-.46 16.3 21.1 11.14 22.7 11 13.6-1.2 17.38-9.96 17.36-14.48-.06-14.3-19.07-10.3-21.07-10.07-7.9.92-10.48 1.57-10.48 1.57"></path>*/}
                                        {/*<path fill="none" stroke="#2f2c2c" stroke-width="1.4" d="M119.7 1.05c-2.53 13.9-5.1 27.83-2.53 41.44" stroke-linecap="round"></path>*/}
                                        {/*<path fill="none" stroke="#2f2c2c" stroke-width="1.4" d="M133.6 27.8c-6.62-.42-12.6.37-17.36 3.35"></path>*/}
                                        {/*<path fill="none" stroke="#2f2c2c" stroke-width="1.4"*/}
                                        {/*d="M131.52 32.77s3.95-.13 8.34-.93c2.4-.43 5-1.73 7.87-1.85 2.87-.12 1.74 1.44 3.6 1.38 4.62-.14 7.98-.3 14.92-.7 6.95-.4 9.76-2.76 12.86-.92 1.7 1 1.4 3.13 1.4 3.13"*/}
                                        {/*stroke-linecap="round"></path>*/}
                                        {/*<path fill="none" stroke="#2f2c2c" stroke-width="1.4" d="M153.52 31.03s2.27-2.74-.7-3.35c-3.36-.7-3.7 2.43-3.7 2.43"></path>*/}
                                        {/*</svg>*/}
                                    </div>
                                </div>

                                <div className="col-lg-7 col-lg-offset-1 col-md-8 col-sm-12 col-xs-12">

                                    <div className="testimonial-item">
                                        {/*<!-- Slider main container -->*/}
                                        <div className="swiper-container testimonial__thumb overflow-visible" >
                                            <div className="swiper-wrapper" style={divStyle}>
                                                {testimonials.map((child, index) => (
                                                    <div className="swiper-slide transitionTestimonialsSlide"
                                                         key={ index }
                                                         style={this.getOpacity(index)}
                                                    >

                                                        <Slide data={child}/>
                                                    </div>
                                                ))}
                                                {this.props.recentTestimonials.loadedPartOfTestimonials ?

                                                    <div className="swiper-slide transitionTestimonialsSlide"
                                                         style={this.getOpacity(testimonials.length +1)}
                                                    >
                                                        <Slide data={testimonials[0]}/>
                                                    </div>  : ''}
                                            {/*<!-- If we need pagination -->*/}



                                            </div>
                                            <ul id="nav-btns">
                                                {testimonials.map((child, index) => (
                                                    <Indicator
                                                        key={index}
                                                        data={child}
                                                        i={index}
                                                        active={this.state.position === index}
                                                        onClick={this.HandleButtonClick}
                                                    />
                                                ))}
                                            </ul>
                                            <div className="quote">
                                                <i className="seoicon-quotes"></i>
                                            </div>
                                        </div>

                                        <div className="testimonial__thumb-img transitionAll" style={gearStyle}>
                                            <img src="img/testimonial1.png" alt="image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-img transitionAll" style={thumbStyle}>
                            <img src="img/testimonial2.png" alt="image"/>
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

const InviewOptions = {offsetY: 0.8, showGuides: false, fullElementInView: false}


export default connect(mapStateToProps, mapToDispatch)(ReactInview(InviewOptions)(TestimonialsCarousel))
