import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Counter from '../../../decorators/Counter'

class CountItem extends Component {

    render() {
        const {units, title}=this.props.data
        const {dataCount, countToFixed} = this.props
        return (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="counter-item">
                    <div className="counter-numbers counter">
                        <span>{countToFixed(dataCount)}{units}</span>
                    </div>
                    <span className="counter-title">{title}</span>
                    <div className="counter-line">
                        <span className="short-line"></span>
                        <span className="long-line"></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter(CountItem)