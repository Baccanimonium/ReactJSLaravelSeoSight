import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SubscribeForm from '../../SubscribeForm'
import StunningHeader from '../../StunnigHeader'
import QualitySkills from './QualitySkills/Index'
import TestimonialsSlider from '../TestimonialsSlider/Index'
import ContactForm from '../ContactForm'

class LocalSeo extends Component {

    render() {
        return (
            <div className="content-wrapper">

                {/*<!-- Stunning-header -->*/}
                <StunningHeader title={'Local SEO'} img={'stunning-header-bg-breez'}/>

                {/*<!-- End Stunning-header -->*/}

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
                    <div className="row pt120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                                    <div className="heading align-center pb120">
                                        <h4 className="h1 heading-title">Local SEO is About Bringing Customers
                                            Through Your Doors</h4>
                                        <div className="heading-line">
                                            <span className="short-line"></span>
                                            <span className="long-line"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="local-seo">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <img src="../img/local-seo1.jpg" alt="local-seo"/>
                                            <img src="../img/local-seo2.jpg" alt="local-seo"/>
                                                <img src="../img/local-seo-main.jpg" alt="local-seo" className="shadow-image"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row medium-padding120 bg-border-color">
                        <div className="container">

                            <div className="row align-center">

                                <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                                    <div className="h5 c-gray pt100">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
                                        Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum
                                        formas humanitatis per seacula.
                                    </div>

                                    <div className="btn btn-medium btn--blue btn-hover-shadow mt60">
                                        <span className="text">Tell Us About Your Project</span>
                                        <span className="semicircle"></span>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row medium-padding120">

                        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 mb30">
                            <img src="../img/local-seo3.jpg" alt="local-seo"/>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                            <div className="heading">

                                <h3 className="h3 heading-title">Investigationes demonstraverunt lectores legere me lius quod saepius.</h3>

                                <p>Qolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibham liber tempor cum soluta nobis
                                    nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima.
                                </p>

                            </div>

                            <a href="22_contacts.html" className="btn btn-medium btn--light-green btn-hover-shadow">
                                <span className="text">Request a Free Quote</span>
                                <span className="semicircle"></span>
                            </a>
                        </div>

                    </div>
                </div>

                {/*<!-- Skills -->*/}

                <QualitySkills/>

                {/*<!-- End Skills -->*/}

                {/*<!-- Testimonials Slider -->*/}

                <TestimonialsSlider/>

                {/*<!-- End Testimonials Slider -->*/}

                {/*<!-- Info Box -->*/}

                <div className="container-fluid">
                    <div className="row medium-padding120 bg-orange-color">
                        <div className="container">
                            <div className="row mb30">
                                <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                                    <div className="heading align-center">
                                        <h4 className="h1 heading-title">Professional Tools for Your Business</h4>
                                        <div className="heading-line">
                                            <span className="short-line bg-yellow-color"></span>
                                            <span className="long-line bg-yellow-color"></span>
                                        </div>
                                        <p className="heading-text c-white">Mirum est notare quam littera gothica nunc.</p>
                                    </div>

                                </div>

                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                                    <div className="info-box--standard">
                                        <div className="info-box-image">
                                            <img src="../img/info-box23.png" alt="image"/>
                                        </div>
                                        <div className="info-box-content">
                                            <h5 className="info-box-title">Keyword Research</h5>
                                            <p className="text c-white">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium
                                                lectorum investigationes demonstraverunt investigationes demonstraverunt lectores.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                                    <div className="info-box--standard">
                                        <div className="info-box-image">
                                            <img src="../img/info-box24.png" alt="image"/>
                                        </div>
                                        <div className="info-box-content">
                                            <h5 className="info-box-title">Awesome Team</h5>
                                            <p className="text c-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                                nibh euismod tincidunt ut laoreet dolore eodem modo typi, qui nunc nobis videntur parum.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/*<!-- End Info Box -->*/}


                {/*<!-- Contact Form -->*/}


                <div className="container">
                    <div className="row pt120">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="heading">
                                <h4 className="h1 heading-title">Tell Us About Your Project</h4>
                                <div className="heading-line">
                                    <span className="short-line"></span>
                                    <span className="long-line"></span>
                                </div>

                                <p>Let us help you get your business online and grow it with passion.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row pb120">

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div>
                                <ContactForm/>
                            </div>
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

export default LocalSeo