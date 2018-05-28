import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadPartOfCases} from "../../../../actionCreators/index"
import Case from './Case'


class RecentCases extends Component {
    constructor(props) {
        super(props)
        this.state = {
            casesLoadCount :3
        }
    }
    componentWillMount(){
        const { dispatchLoadCases} = this.props
        const {loaded, loadedPartOfCases} = this.props.recentCases
        if (!loaded && !loadedPartOfCases) dispatchLoadCases(this.state.casesLoadCount)

    }
    render() {
        const {partOfCases} = this.props.recentCases
        return (
            <div className="container">
                <div className="row medium-padding120">
                    <div className="recent-case align-center">

                        <div className="col-lg-12">

                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
                                    <div className="heading align-center">
                                        <h4 className="h1 heading-title">Recent Case Studies</h4>
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
                                <div className="case-item-wrap">
                                    { partOfCases.map((cases, index) => (
                                        <Case
                                            key={index}
                                            data={cases}
                                        />
                                    )) }
                                </div>
                            </div>

                            <a href="11_case_studies.html" className="btn btn-medium btn--dark">
                                <span className="text">All Projects</span>
                                <span className="semicircle"></span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        recentCases: state.cases
    }
}
const mapToDispatch ={
    dispatchLoadCases: loadPartOfCases
}

export default connect(mapStateToProps, mapToDispatch)(RecentCases)
