import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Indicator from './Indicator'
import {connect} from 'react-redux'
import {loadSlides} from "../../../../actionCreators/index"
import Carousel from '../../../decorators/Carousel'
import Slide from "./Slide"

class MainCarousel extends Component {

    componentWillMount(){
        const { dispatchLoadSlides} = this.props
        const {loaded, loading} = this.props.slides
        if (!loaded && !loading) dispatchLoadSlides()
    }

    componentWillUnmount(){
        this.props.clearTimer()
    }
    getColor(itemColor){
        return{ backgroundColor: itemColor}
    }
    render() {
        const {transitionStyle, handleIndicatorClick, handleMouseEnter, handleMouseLeave, nextSlide, prevSlide} =this.props
        const {slides} = this.props.slides
        return (
            <div className="container-full-width">
                <div className="swiper-container main-slider" onMouseEnter={(e) =>handleMouseEnter(e)} onMouseLeave={(e) =>handleMouseLeave(slides.length,e)}>
                    <div className="swiper-wrapper" style={transitionStyle}>
                        {slides.map((child, index) => (
                            <div className="swiper-slide"
                                key={ index }
                                style={this.getColor(child.color)}
                            >

                                <Slide data={child}/>
                            </div>
                        ))}
                        {this.props.slides.loaded ?
                            <div className="swiper-slide"
                                 style={this.getColor(slides[0].color)}
                            >
                                <Slide data={slides[0]}/>
                                setTimer(slides.length)
                            </div>  : ''}

                    </div>
                    <svg className="btn-next btn-next-black" onClick={ (e) => nextSlide(slides.length,e)}>
                        <use xlinkHref="#arrow-right"></use>
                    </svg>
                    <svg className="btn-prev btn-prev-black" onClick={ (e) => prevSlide(slides.length,e)}>
                        <use xlinkHref="#arrow-left"></use>
                    </svg>
                    <div className="slider-slides">
                        {slides.map((child, index) => (
                            <a  key={index} className="slides-item" style={this.getColor(child.color)} onClick={(e) =>handleIndicatorClick(index, e)}>
                                <Indicator
                                    data={child}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        slides: state.slides
    }
}
const mapToDispatch ={
    dispatchLoadSlides: loadSlides
}


export default connect(mapStateToProps, mapToDispatch)(Carousel(MainCarousel))
