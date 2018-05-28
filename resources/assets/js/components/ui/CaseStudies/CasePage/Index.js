import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { NavLink} from 'react-router-dom'
import {checkAndLoadCase} from "../../../../actionCreators/studioCases"
import { withRouter } from 'react-router'
import Testimonials from './Testimonials'
import Chart from './Chart'
import SubscribeForm from '../../SubscribeForm'
import StunnigHeader from '../../StunnigHeader'
class CasePage extends Component {

    componentWillMount() {
        this.props.dispatchCheckAndLoadCase(this.props.match.params.id)
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.dispatchCheckAndLoadCase(this.props.match.params.id)
        }
    }
    render() {
        const caseItem=this.props.cases.caseItem.find(item=>item.id == this.props.match.params.id)
        if(caseItem ===undefined) {return <div>Loading...</div>}

        const {challenge,created_at,img,likesCount, results,resultsChart,resultsText,solution,solutionImg,testimonials,text,title,betwenItems} = caseItem
        return(
            <div className="content-wrapper">

            {/*<!-- Stunning header -->*/}
                <StunnigHeader title={'Project Details'} img={'stunning-header-bg-rose'}/>
            {/*<!-- End Stunning header -->*/}

            {/*<!-- Overlay search -->*/}

            <div className="overlay_search">
                <div className="container">
                    <div className="row">
                        <div className="form_search-wrap">
                            <form>
                                <input className="overlay_search-input" placeholder="Type and hit Enter..." type="text"/>
                                    <a href="#" className="overlay_search-close">
                                        <span></span>
                                        <span></span>
                                    </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/*<!-- End Overlay search -->*/}

            {/*<!-- Product description -->*/}


            <div className="container-fluid">
                <div className="row bg-border-color medium-padding120">
                    <div className="container">
                        <div className="row">
                            <div className="product-description-ver2">

                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                    <img src={`${this.context.appUrl}${img}`} alt="solutions"/>
                                </div>

                                <div className="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-12 col-xs-12">
                                    <div className="product-description-ver2-content">
                                        <time className="post__date published">
                                            {created_at}
                                        </time>

                                        <div className="heading">
                                            <h4 className="h1 heading-title">{title}</h4>
                                            <p>{text}
                                            </p>
                                        </div>

                                        <div className="likes-block">

                                            <div className="btn btn-medium btn--dark btn-hover-shadow">
                                                <span className="text">Visit Site</span>
                                                <span className="semicircle"></span>
                                            </div>

                                            <a href="#" className="likes">
                                                <i className="seoicon-shape-heart"></i>
                                                <span className="count-likes">{likesCount}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<!-- End Product description -->*/}

            {/*<!-- Challenge solutions -->*/}


            <div className="container">
                <div className="row medium-padding120">
                    <div className="challenge-solutions">
                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                            <div className="challenge-solutions-content">
                                <div className="heading">
                                    <h4 className="h1 heading-title">Challenge</h4>
                                    <div className="heading-line">
                                        <span className="short-line"></span>
                                        <span className="long-line"></span>
                                    </div>
                                    <p>{challenge}
                                    </p>
                                </div>

                                <div className="heading">
                                    <h4 className="h1 heading-title">Solution</h4>
                                    <div className="heading-line">
                                        <span className="short-line"></span>
                                        <span className="long-line"></span>
                                    </div>
                                    <p>{solution}
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
                            <div className="challenge-solutions-thumb">
                                <img src={`${this.context.appUrl}${solutionImg}`} alt="solutions"/>
                                    <p className="text">Claritas est etiam processus dynamicus, qui sequitur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<!-- End Challenge solutions -->*/}

            {/*<!-- Seo Results -->*/}

                <Chart results={results} text={resultsText} chartData={resultsChart}/> :''

            {/*<!-- End Seo Results -->*/}
            {
                testimonials.length === 1? <Testimonials item={testimonials[0]} appUrl={this.context.appUrl}/>
                    : testimonials.map((child, index) => (
                        <Testimonials  key={index} item={child} appUrl={this.context.appUrl}/>
                    ))

            }

            {/*<!-- Socials Panel -->*/}


            <div className="container-fluid">
                <div className="row">
                    <div className="socials-panel">
                        <div className="socials-panel-item facebook-bg-color">
                            <a  className="social__item table-cell">
                                <i className="seoicon-social-facebook"></i>
                            </a>
                            <a  className="socials-panel-title table-cell">Facebook
                                <span className="socials-panel-count">(236)</span>
                            </a>
                        </div>
                        <div className="socials-panel-item twitter-bg-color">
                            <a  className="social__item table-cell">
                                <i className=" seoicon-social-twitter"></i>
                            </a>
                            <a  className="socials-panel-title table-cell">Twitter
                                <span className="socials-panel-count">(87)</span>
                            </a>
                        </div>
                        <div className="socials-panel-item linkedin-bg-color">
                            <a  className="social__item table-cell">
                                <i className="seoicon-social-linkedin"></i>
                            </a>
                            <a  className="socials-panel-title table-cell">Linkedin
                                <span className="socials-panel-count">(9)</span>
                            </a>
                        </div>
                        <div className="socials-panel-item google-bg-color">
                            <a  className="social__item table-cell">
                                <i className="seoicon-social-google-plus"></i>
                            </a>
                            <a  className="socials-panel-title table-cell">Google+
                                <span className="socials-panel-count">(110)</span>
                            </a>
                        </div>
                        <div className="socials-panel-item pinterest-bg-color">
                            <a  className="social__item table-cell">
                                <i className="seoicon-social-pinterest"></i>
                            </a>
                            <a  className="socials-panel-title table-cell">Pinterest
                                <span className="socials-panel-count">(0)</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/*<!-- End Socials Panel -->*/}

            {/*<!-- Pagination -->*/}
            <div className="container">
                <div className="row">
                    <div className="pagination-arrow">
                        <div className="col-lg-12">
                            {this.props.match.params.id - 1 > 0?
                            <NavLink  to={`/case_studies/show/${betwenItems[0]}`  } >
                                <div className="btn-prev-wrap">
                                    <svg className="btn-prev">
                                        <use xlinkHref="#arrow-left"></use>
                                    </svg>
                                    <div className="btn-content">
                                        <div className="btn-content-title">Next Project</div>
                                        <p className="btn-content-subtitle">Claritas Est Etiam Processus</p>
                                    </div>
                                </div>
                            </NavLink>: ''}
                            <NavLink  to="/case_studies" >
                                <div className="all-project">
                                <i className="seoicon-shapes"></i>
                                </div>
                            </NavLink>
                            {betwenItems[1]? <NavLink to={`/case_studies/show/${betwenItems[1]}`  } >
                                <div  className="btn-next-wrap">
                                    <div className="btn-content">
                                        <div className="btn-content-title">Previous Project</div>
                                        <p className="btn-content-subtitle">Duis Autem Velius</p>
                                    </div>
                                    <svg className="btn-next">
                                        <use xlinkHref="#arrow-right"></use>
                                    </svg>
                                </div>
                            </NavLink>:''}

                        </div>
                    </div>
                </div>
            </div>

            {/*<!-- End Paginations -->*/}

            {/*<!-- Subscribe Form -->*/}
                <SubscribeForm/>
            {/*<!-- End Subscribe Form -->*/}

        </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        cases: state.cases
    }
}
const mapToDispatch ={
    dispatchCheckAndLoadCase: checkAndLoadCase
}



export default withRouter (connect(mapStateToProps, mapToDispatch)(CasePage))

CasePage.contextTypes ={
    appUrl: PropTypes.string
}
