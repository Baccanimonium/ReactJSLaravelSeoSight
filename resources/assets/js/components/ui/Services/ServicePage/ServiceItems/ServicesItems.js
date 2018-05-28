import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadSlides} from "../../../../../actionCreators/index"
import {Item, DefaultItem} from './Item'

class ServicesItems extends Component {

    componentWillMount(){
        const { dispatchLoadSlides} = this.props
        const {loaded, loading} = this.props.slides
        if (!loaded && !loading) dispatchLoadSlides()

    }

    render() {
        const {slides} = this.props.slides
        const rows = slides.reduce((acc, el, i) => {
            if(i === 0 || (i % 3 === 2 && i !== 1)) acc.push([])
            acc[acc.length-1].push(el)
            return acc
        }, [])
        const wrappedSlides = rows.map((row, index) => (
            <div key={index} className="row pt120 pb30">
                {index === 0 ? <DefaultItem/> : ''}
                {row.map((slide, i) => <Item key={i} data={slide} />)}
            </div>
        ))
        return (
            <div className="container">
                {wrappedSlides}
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

export default connect(mapStateToProps, mapToDispatch)(ServicesItems)
