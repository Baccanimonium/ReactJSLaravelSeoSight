import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadCounters} from "../../../../../actionCreators/index"
import SkillsItem from './SkillsItem'
import { withRouter } from 'react-router'
import ReactInview from 'react-inview-js'

class QualitySkills extends Component {
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
        const { location } = this.props
        const { counters} = this.props.counters
        const filteredCounters =counters.filter(item=>item.pages === location.pathname)
        return (
            <div className="container-fluid">
                <div className="row medium-padding120 bg-boxed-black">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <div className="heading">

                                    <h4 className="h1 heading-title c-white">Quality Skills</h4>

                                    <div className="heading-line">
                                        <span className="short-line"></span>
                                        <span className="long-line"></span>
                                    </div>

                                    <p className="mb30">Mirum est notare quam littera gothica, quam nunc putamus parum claram,
                                        anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
                                        Eodem modo typi, qui nunc nobis videntur parum clari, sollemnes in futurum.
                                    </p>

                                </div>

                                <a href="21_seo_analysis.html" className="btn btn-medium btn--olive btn-hover-shadow mb30">
                                    <span className="text">Free SEO Consultation</span>
                                    <span className="semicircle"></span>
                                </a>
                            </div>

                            <div className="col-lg-7 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">
                                <div className="skills">
                                    { filteredCounters.map((counter, index) => (
                                        <SkillsItem
                                            key={ index }
                                            renderParam={this.state}
                                            data={counter}
                                            i={index}
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
        counters: state.counter
    }
}
const mapToDispatch ={
    dispatchLoadCounters: loadCounters
}

const InviewOptions = {offsetY: 0.6, showGuides: false, fullElementInView: false}
export default connect(mapStateToProps, mapToDispatch)(ReactInview(InviewOptions)(withRouter(QualitySkills)))