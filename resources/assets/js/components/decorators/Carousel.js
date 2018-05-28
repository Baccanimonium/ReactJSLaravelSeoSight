import React, {Component} from 'react'

export default (OriginalComponent) => class Carousel extends Component {
    constructor(props){
        super(props)
        this.state = {
            position: 0,
            slidingAnimationEnd: true,
            noTransition: false,
            autoSwipeDelay: 5000
        }
    }

    setTimer(slidesLength){
        this.timerID = setInterval(
            () => this.nextSlide(slidesLength),
            this.state.autoSwipeDelay
        )
    }
    clearTimer(){
        clearInterval(this.timerID)
    }
    handleMouseEnter(){
        this.clearTimer()
    }
    handleMouseLeave(slidesLength){
        this.setTimer(slidesLength)
    }
    handleIndicatorClick(i, e){
        e && e.preventDefault && e.preventDefault()
        if(this.state.position === i){
            return
        }
        this.setState({
            position: i,
        })
    }
    nextSlide(slidesLength){
        if (!this.state.slidingAnimationEnd){
            return
        }this.setState({
            slidingAnimationEnd: false
        })

        if(this.state.position < (slidesLength )){
            this.setState((prevState) => {
                return {
                    position:prevState.position +1
                }
            })
        }
        if(this.state.position >= (slidesLength -1 )) {
            setTimeout(() => {this.setState({
                    noTransition: true,
                    position: 0
                })}, 1000)

        }
        this.setState({
            slidingAnimationEnd: true,
            noTransition: false
        })
    }
    prevSlide(slidesLength){


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
                position: slidesLength
            })
            setTimeout(() => {
                this.setState({
                    noTransition: false,
                    slidingAnimationEnd: true,
                    position: slidesLength -1
                })
            }, 50)
        }
        this.setState({
            slidingAnimationEnd: true,
        })

    }
    render() {
        const transitionStyle = {
            transition: this.state.noTransition ?'0s':'transform 1s ease',
            transform: `translateX(-${this.state.position}00%)`
        }
        return <OriginalComponent{...this.props}
                                 {...this.state}
                                 prevSlide={(e) =>this.prevSlide(e)}
                                 nextSlide={(e) =>this.nextSlide(e)}
                                 handleMouseLeave={(e) =>this.handleMouseLeave(e)}
                                 handleMouseEnter={(e) =>this.handleMouseEnter(e)}
                                 handleIndicatorClick={(e) =>this.handleIndicatorClick(e)}
                                 setTimer={(e) =>this.setTimer(e)}
                                 clearTimer={(e) =>this.clearTimer(e)}
                                 transitionStyle={transitionStyle}
        />
    }
}



