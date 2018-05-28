import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Counter from './CountItem'
import ReactInview from 'react-inview-js'
import {connect} from 'react-redux'
import {loadCounters} from "../../../../actionCreators/index"
import { withRouter } from 'react-router'

class Counters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSpeed :2000,
            interval: 20,
            viewed: false,
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
        const { location } = this.props
        const { counters} = this.props.counters
        const filteredCounters =  counters.filter(item=>item.pages === location.pathname)
        return (
            <div className="container-fluid">
                <div className="row bg-green-color">
                    <div className="container">
                        <div className="row">
                            <div className="counters">
                                { filteredCounters.map((counter, index) => (
                                    <Counter
                                        key={ index }
                                        renderParam={this.state}
                                        data={counter}
                                        />
                                )) }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
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

const InviewOptions = {offsetY: 0, showGuides: false, fullElementInView: false}

export default connect(mapStateToProps, mapToDispatch)(ReactInview(InviewOptions)(withRouter(Counters)))