import React, {Component} from 'react'

export default (OriginalComponent) => class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataCount: this.props.data.from || 0,
            viewed: false
        }

        this.clearCounter = this.clearCounter.bind(this);
        this.nextIndex = this.nextIndex.bind(this);
    }
    componentDidMount() {
        window.addEventListener("scroll",(e) => this.checkViewed (e) )
    }
    componentWillUnmount(){
        window.removeEventListener("scroll",(e) => this.checkViewed (e))
    }
    getFinalIndex(time, refreshInterval, from, to){
        this.iterationCount = Math.ceil(time/refreshInterval)
        this.increment = (to - from)/this.iterationCount
        this.loopsCounter = 0
        this.counter =setInterval(this.nextIndex, refreshInterval)

    }
    nextIndex(){
        if (this.loopsCounter < this.iterationCount) {
            this.loopsCounter++;
            this.setState(({ dataCount }) => ({
                dataCount: dataCount + this.increment,
            }))
        } else {
            this.setState({
                dataCount: this.props.data.to
            })
            this.clearCounter()
        }
    }
    clearCounter(){
        clearInterval(this.counter)
    }

    countToFixed(acc){

        if(acc < 1 ){
            return '0'}
        else return acc.toFixed(0)
    }
    checkViewed(){
        const {to, from } = this.props.data
        const {dataSpeed, interval, viewed} = this.props.renderParam
        if(viewed && !this.state.viewed){
            this.setState({
                viewed: true,
            })
            return this.getFinalIndex(dataSpeed, interval, from, to )
        }
    }
    render()

    {
        return <OriginalComponent{...this.props}
                                 {...this.state}
                                 countToFixed={(e) =>this.countToFixed(e)}
        />
    }
}
