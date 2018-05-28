import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadPrices} from "../../../../actionCreators/index"
import PriceItem from './PriceItem'
class PricingTable extends Component {


    componentWillMount(){
        const { dispatchLoadPrices} = this.props
        const {loaded, loading} = this.props.prices
        if (!loaded && !loading) dispatchLoadPrices()
    }
    render() {
        const {prices} = this.props.prices

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="pricing-tables medium-padding120 bg-border-color">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
                                    <div className="heading align-center">
                                        <h4 className="h1 heading-title">Our Pricing Packages</h4>
                                        <div className="heading-line">
                                            <span className="short-line"></span>
                                            <span className="long-line"></span>
                                        </div>
                                        <p className="heading-text">Claritas est etiam processus dynamicus,
                                            qui sequitur mutationem consuetudium.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="pricing-tables-wrap">
                                    { prices.map((price, index) => (
                                        <PriceItem
                                            key={index}
                                            data={price}
                                        />
                                    )) }
                                </div>
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
        prices: state.prices
    }
}
const mapToDispatch ={
    dispatchLoadPrices: loadPrices
}

export default connect(mapStateToProps, mapToDispatch)(PricingTable)
