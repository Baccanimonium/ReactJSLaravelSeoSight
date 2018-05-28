import React from 'react';
import InfoBox from './InfoBox'
import SeoScoreBox from './SeoScoreBox'
import Counters from './Counters/Counters'
import RecentCases from './RecenCases/RecentCases'
import PricingTable from './PriceList/PricingTable'
import SubscribeForm from '../SubscribeForm'
import BackgroundMounatins from './BackgroundMountains'
import TestimonialsCarousel from './TestimonialsCarousel/index'
import MainCarousel from './MainCarousel/index'
import PostCarousel from './PostCrousel/index'
import ClientsCompanyCarousel from './ClientsCompanyCarousel/index'

const MainPage = ({}) => {

    return(
        <div className="content-wrapper">
            <div className="header-spacer"></div>
            {/*<!-- Main Slider -->*/}
            <MainCarousel/>
            <InfoBox/>
            <SeoScoreBox/>


            {/*<!-- ... End SEO-Score -->*/}


            {/*<!-- Offers -->*/}

            <div className="container">
                <div className="row medium-padding120">
                    <div className="col-lg-12">
                        <div className="offers">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                    <div className="heading">
                                        <h4 className="h1 heading-title">We Offer a Full Range of Digital
                                            Marketing Services!</h4>
                                        <div className="heading-line">
                                            <span className="short-line"></span>
                                            <span className="long-line"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="heading">
                                        <p className="heading-text">Claritas est etiam processus dynamicus, qui sequitur
                                            mutationem consuetudium.
                                        </p>
                                    </div>

                                    <ul className="list list--secondary">
                                        <li>
                                            <i className="seoicon-check"></i>
                                            <a href="#">Qolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh;</a>
                                        </li>
                                        <li>
                                            <i className="seoicon-check"></i>
                                            <a href="#">Investigationes demonstraverunt;</a>
                                        </li>
                                        <li>
                                            <i className="seoicon-check"></i>
                                            <a href="#">Dam liber tempor cum soluta nobis eleifend option congue nihil;</a>
                                        </li>
                                        <li>
                                            <i className="seoicon-check"></i>
                                            <a href="#">Quarta decima et quinta.</a>
                                        </li>
                                    </ul>

                                    <a href="03_services.html" className="btn btn-medium btn-border c-primary">
                                        <span className="text">Learn More</span>
                                        <span className="semicircle"></span>
                                    </a>

                                    <a href="10_testimonials.html" className="btn btn-medium btn--primary btn-hover-shadow">
                                        <span className="text">Get a Quote</span>
                                        <span className="semicircle"></span>
                                    </a>

                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="offers-thumb">
                                        <img src="img/offers1.png" alt="offers"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<!-- ... End Offers -->*/}


            {/*<!-- Our-video -->*/}

            <div className="container-fluid">
                <div className="row">
                    <div className="our-video js-equal-child">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 no-padding">
                            <div className="video theme-module">
                                <div className="video-thumb">
                                    <div className="overlay"></div>
                                    <a href="https://www.youtube.com/watch?v=0O2aH4XLbto" className="video-control js-popup-iframe">
                                        <img src="svg/video-control.svg" alt="go"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-12 col-xs-12 no-padding">
                            <div className="content theme-module centered-on-mobile medium-padding100">
                                <div className="heading">
                                    <h4 className="h1 heading-title">Watch Our Video</h4>
                                    <div className="heading-line">
                                        <span className="short-line"></span>
                                        <span className="long-line"></span>
                                    </div>
                                    <p className="heading-text">Qolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibham liber
                                        tempor cum soluta nobis eleifend option congue nihil uarta decima et quinta.
                                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                                        nisl ut aliquip ex ea commodo consequat eleifend option nihil.
                                    </p>
                                </div>
                                <a href="02_abouts.html" className="btn btn-medium btn--secondary">
                                    <span className="text">About Us</span>
                                    <span className="semicircle"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<!-- ... End Offers -->*/}


            {/*<!-- Background-mountains -->*/}

            <BackgroundMounatins/>

            {/*<!-- End Background-mountains -->*/}


            {/*<!-- Counters -->*/}

            <Counters/>

            {/*<!-- End Counters -->*/}


            {/*<!-- Recent-case -->*/}

            <RecentCases/>

            {/*<!-- End Recent-case -->*/}


            {/*<!-- Testimonial-slider -->*/}

            <TestimonialsCarousel/>
            {/*<!-- End Testimonial-slider -->*/}


            {/*<!-- Pricing table -->*/}

            <PricingTable/>

            {/*<!-- End Pricing table -->*/}


            {/*<!-- Post-slider -->*/}

            <PostCarousel/>
            {/*<!-- End Post-slider -->*/}


            {/*<!-- Clients -->*/}
            <ClientsCompanyCarousel/>
            <SubscribeForm/>
        </div>

    )
}

export default MainPage;