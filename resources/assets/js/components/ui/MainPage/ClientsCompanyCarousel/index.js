import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadClientsCopmanyItems} from "../../../../actionCreators/index"
import Carousel from '../../../decorators/Carousel'
import Slide from "./Slide"

class ClientsCompanyCarousel extends Component {
    constructor(props){
        super(props)
        this.state = {
            containerWidth: 0,
            key:0
        }
    }
    componentWillMount(){
        const { dispatchLoadClientsCompanyItems} = this.props
        const {loaded, loading} = this.props.clientsCompanyItems
        if (!loaded && !loading) dispatchLoadClientsCompanyItems()
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
        window.addEventListener("resize",(e) => this.updateComponent (e) )
        window.addEventListener("resize",(e) => this.updateDimensions (e) )
    }
    componentWillUnmount(){
        this.props.clearTimer()
        window.removeEventListener("resize",(e) => this.updateComponent (e))
        window.removeEventListener("resize",(e) => this.updateDimensions (e))
    }
    getWidth(){

        this.unitWidth = (this.state.containerWidth - 110)/4
        return { width : `${this.unitWidth}px` }
    }
    render() {
        const { nextSlide, prevSlide} =this.props
        const {clientsCompanyItems} = this.props.clientsCompanyItems
        const transitionStyle = {
            transition: this.props.noTransition ?'0s':'transform 1s ease',
            transform: `translateX(calc(-${this.props.position}px*${this.unitWidth + 20}))`
        }
        return (
            <div className="section">
                <div className="client-carousel medium-padding120">
                    <div className="container" key={this.state.key} ref={ (container) => this.container = container}>
                        <div className="row">
                            <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-xs-12">
                                <div className="heading align-center">
                                    <h4 className="h1 heading-title">Our Valuable Clients</h4>
                                    <div className="heading-line">
                                        <span className="short-line"></span>
                                        <span className="long-line"></span>
                                    </div>
                                    <p className="heading-text">Qui mutationem consuetudium. </p>
                                </div>
                            </div>
                        </div>

                        <div className="theme-module clients-slider-module">

                            <div className="swiper-container pagination-bottom" data-show-items="4">

                                <div className="swiper-wrapper" style={transitionStyle}>

                                    {clientsCompanyItems.map((child, index) => (
                                        <div className="swiper-slide marginRightSlide"
                                             key={ index }
                                             style={this.getWidth()}
                                        >
                                            <Slide data={child}/>
                                        </div>
                                    ))}
                                    {clientsCompanyItems.map((child, index) => (
                                        <div className="swiper-slide marginRightSlide"
                                             key={ index }
                                             style={this.getWidth()}
                                        >

                                            <Slide data={child}/>
                                        </div>
                                    ))}
                                </div>
                                <svg className="btn-next btn-next-black" onClick={(e) => nextSlide(clientsCompanyItems.length,e)}>
                                    <use xlinkHref="#arrow-right"></use>
                                </svg>
                                <svg className="btn-prev btn-prev-black" onClick={(e) => prevSlide(clientsCompanyItems.length,e)}>
                                    <use xlinkHref="#arrow-left"></use>
                                </svg>
                                {/*<!--Prev Next Arrows-->*/}
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
        clientsCompanyItems: state.clientsCompany
    }
}
const mapToDispatch ={
    dispatchLoadClientsCompanyItems: loadClientsCopmanyItems
}


export default connect(mapStateToProps, mapToDispatch)(Carousel(ClientsCompanyCarousel))
