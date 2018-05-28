import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SubscribeForm from '../../SubscribeForm'
import StunningHeader from '../../StunnigHeader'
import PieCharts from './PieCharts/Index'
import TestimonialsSlider from '../TestimonialsSlider/Index'
import ContactForm from '../ContactForm'

class SMM extends Component {

    render() {
        return (
            <div className="content-wrapper">

                {/*<!-- Stunning Header -->*/}
                <StunningHeader title={'Social Media Marketing'} img={'stunning-header-bg-red'}/>
                {/*<!-- End Stunning Header -->*/}

                {/*<!-- Overlay Search -->*/}

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

                {/*<!-- End Overlay Search -->*/}


                <div className="container-fluid">
                    <div className="row medium-padding120 bg-border-color">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                    <div className="heading mb30">
                                        <h4 className="h1 heading-title">Social Media
                                            Marketing Services</h4>
                                        <div className="heading-line">
                                            <span className="short-line"></span>
                                            <span className="long-line"></span>
                                        </div>

                                        <h5 className="heading-subtitle">Eodem modo typi, qui nunc nobis videntur parum clari,
                                            fiant sollemnes in futurum per seacula quarta.
                                        </h5>

                                    </div>

                                    <ul className="list list--secondary mb60">
                                        <li>
                                            <i className="seoicon-check"></i>
                                            <a href="#">Brand Monitoring
                                            </a>
                                        </li>

                                        <li>
                                            <i className="seoicon-check"></i>
                                            <a href="#">Social Media Management
                                            </a>
                                        </li>

                                        <li>
                                            <i className="seoicon-check"></i>
                                            <a href="#">Setup & Custom Profile Design
                                            </a>
                                        </li>

                                        <li>
                                            <i className="seoicon-check"></i>
                                            <a href="#">Social Media Contests
                                            </a>
                                        </li>
                                    </ul>

                                    <a href="21_seo_analysis.html" className="btn btn-medium btn--dark btn-hover-shadow mb30">
                                        <span className="text">Free SEO Consultation</span>
                                        <span className="semicircle"></span>
                                    </a>
                                </div>

                                <div className="col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
                                    <img src={`${this.context.appUrl}img/social-photo.png`} alt="social"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<!-- Pie charts -->*/}

                <PieCharts/>

                {/*<!-- End Pie charts -->*/}

                {/*<!-- Info Box -->*/}

                <div className="container-fluid">
                    <div className="row bg-boxed-primary pt120">

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="heading align-center mb60">
                                        <h4 className="h1 heading-title c-white">Social Media Promotion</h4>
                                        <div className="heading-line">
                                            <span className="short-line bg-yellow-color"></span>
                                            <span className="long-line bg-yellow-color"></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="info-box--standard-centered">
                                        <div className="info-box-image">
                                            <img src={`${this.context.appUrl}img/info-box18.png`} alt="image"/>
                                        </div>
                                        <div className="info-box-content">
                                            <h4 className="info-box-title">Content Marketing</h4>
                                            <p className="text c-white">Nam liber tempor cum soluta nobis eleifend option congue nihil
                                                imperdiet doming id quod mazim placerat facer possim assum.
                                            </p>
                                        </div>

                                        <div className="btn btn-small btn--dark">
                                            <span className="text">Read More</span>
                                            <i className="seoicon-right-arrow"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <img src={`${this.context.appUrl}img/social-photo2.png`} alt="photo"/>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="info-box--standard-centered">
                                        <div className="info-box-image">
                                            <img src={`${this.context.appUrl}img/info-box19.png`} alt="image"/>
                                        </div>
                                        <div className="info-box-content">
                                            <h4 className="info-box-title">Great Rankings</h4>
                                            <p className="text c-white">Claritas est etiam processus dynamicus, qui sequitur mutationem
                                                consuetudium lectorum per seacula quarta decima et quinta decima.
                                            </p>
                                        </div>

                                        <div className="btn btn-small btn--dark">
                                            <span className="text">Read More</span>
                                            <i className="seoicon-right-arrow"></i>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/*<!-- End Info Box -->*/}

                {/*<!-- Testimonials slider -->*/}

                <TestimonialsSlider/>

                {/*<!-- End Testimonials slider -->*/}


                {/*<!-- Contact Form -->*/}


                <div className="container">
                    <div className="row medium-padding120">
                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">

                            <div className="heading">
                                <h4 className="h1 heading-title">See How Well Your
                                    Page is Optimized</h4>
                                <div className="heading-line">
                                    <span className="short-line"></span>
                                    <span className="long-line"></span>
                                </div>

                                <h5 className="heading-subtitle">Let us help you get your business online and grow it with passion.</h5>

                                <p>Our team of professional SEO experts is the perfect partner for a successful business partnership.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                            <ContactForm/>
                        </div>
                    </div>
                </div>

                {/*<!-- End Contact Form -->*/}

                {/*<!-- Subscribe Form -->*/}

                <SubscribeForm/>

                {/*<!-- End Subscribe Form -->*/}

            </div>
        )
    }
}

export default SMM

SMM.contextTypes ={
    appUrl: PropTypes.string
}