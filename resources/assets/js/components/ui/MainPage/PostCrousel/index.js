import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Indicator from './Indicator'
import {connect} from 'react-redux'
import {loadLatestBlogItems} from "../../../../actionCreators/index"
import Carousel from '../../../decorators/Carousel'
import Slide from "./Slide"


class MainCarousel extends Component {
    constructor(props){
        super(props)
        this.state = {
            testimonialsLoadCount :9,
            containerWidth: 0,
            key:0
        }
    }
    componentWillMount(){
        const { dispatchLoadBlogItems} = this.props
        const {loaded, loadedPartOfBlogItems} = this.props.blogItems
        if (!loaded && !loadedPartOfBlogItems) dispatchLoadBlogItems(this.state.testimonialsLoadCount)

    }
    updateDimensions() {
        const containerWidth = this.container.clientWidth
        this.setState({
            containerWidth: containerWidth,

        })
    }
    updateComponent(){
        this.setState((prevState ) => {
            return {key: prevState.key + 1}
        })
    }
    componentDidMount() {
        this.updateDimensions()
        window.addEventListener("resize",(e) => this.updateComponent(e))
        window.addEventListener("resize",(e) => this.updateDimensions(e))
    }
    componentWillUnmount(){
        this.props.clearTimer()
        window.removeEventListener("resize",(e) => this.updateComponent (e))
        window.removeEventListener("resize",(e) => this.updateDimensions(e))
    }
    getWidth(){
        const unitWidth = (this.state.containerWidth - 90)/3
        return { width : `${unitWidth}px` }
    }
    render() {
        const {handleIndicatorClick, transitionStyle} =this.props
        const {blogItems} = this.props.blogItems
        return (
            <div className="container" key={this.state.key} ref={ (container) => this.container = container}>

                <div className="recent-post-slider medium-padding120">

                    <div className="row">

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="heading">
                                <h4 className="h1 heading-title">Latest From the Blog</h4>
                                <a href="14_blog.html" className="read-more">Read Our Blog
                                    <i className="seoicon-right-arrow"></i>
                                </a>
                                <div className="heading-line">
                                    <span className="short-line"></span>
                                    <span className="long-line"></span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="theme-module news-slider-module">
                        <div className="swiper-container top-pagination" data-show-items="3" data-scroll-items="3">

                            {/*<!-- If we need pagination -->*/}
                            <div className="swiper-pagination">
                                <Indicator
                                    i={0}
                                    onClick={(e) => handleIndicatorClick(e)}
                                    active={this.props.position === 0}
                                />
                                <Indicator
                                i={1}
                                onClick={(e) => handleIndicatorClick(e)}
                                active={this.props.position === 1}
                                />
                                <Indicator
                                i={2}
                                onClick={(e) => handleIndicatorClick(e)}
                                active={this.props.position === 2}
                                />
                            </div>

                            <div className="swiper-wrapper" style={transitionStyle}>
                                {blogItems.map((child, index) => (
                                    <div className="swiper-slide marginRightSlide"
                                         key={ index }
                                         style={this.getWidth()}
                                    >

                                        <Slide data={child}/>
                                    </div>
                                ))}
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
        blogItems: state.blog
    }
}
const mapToDispatch ={
    dispatchLoadBlogItems: loadLatestBlogItems
}


export default connect(mapStateToProps, mapToDispatch)(Carousel(MainCarousel))
