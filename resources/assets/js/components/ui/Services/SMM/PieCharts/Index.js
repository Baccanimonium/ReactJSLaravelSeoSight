import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadCounters} from "../../../../../actionCreators/index"
import { withRouter } from 'react-router'
import ReactInview from 'react-inview-js'
import PieItem from './PieItem'

class PieCharts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSpeed :2000,
            interval: 20,
            viewed: false
        }
    }
    componentWillMount(){
        const { location } = this.props
        const { dispatchLoadCounters} = this.props
        const {loading, loadedPages} = this.props.counters
        if (!loading && !loadedPages.includes(location.pathname))dispatchLoadCounters(location.pathname)
    }
    componentWillReceiveProps(){
        if (this.props.elementIsInView && this.state.viewed !== true){
            this.setState({
                viewed: true,
            })
        }
    }
    render() {
        const {counters} = this.props.counters
        const filteredCounters =  counters.filter(item=>item.pages === location.pathname)
        const rows = filteredCounters.reduce((acc, el, i) => {
            if(i === 0 || (i % 2 === 0 )) acc.push([])
            acc[acc.length-1].push(el)
            return acc
        }, [])
        const wrappedCounters = rows.map((row, index) => (
            <div key={index} className="row mb60">
                {row.map((pie, i) => <PieItem key={i} data={pie} i={index ===0 ? i: i+2} renderParam={this.state}/>)}
            </div>
        ))
        return (
            <div className="container">
                <div className="row pt120">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="heading mb60">
                            <h4 className="h1 heading-title">Professional Tools for Your Business</h4>
                            <div className="heading-line">
                                <span className="short-line"></span>
                                <span className="long-line"></span>
                            </div>

                            <h5 className="heading-subtitle">Qumonstraverunt lectores legere me lius saepius.</h5>

                        </div>
                    </div>
                </div>
                {wrappedCounters}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        counters: state.counter
    }
}
const mapToDispatch ={
    dispatchLoadCounters: loadCounters
}

const InviewOptions = {offsetY: 0.6, showGuides: false, fullElementInView: false}
export default connect(mapStateToProps, mapToDispatch)(ReactInview(InviewOptions)(withRouter(PieCharts)))
