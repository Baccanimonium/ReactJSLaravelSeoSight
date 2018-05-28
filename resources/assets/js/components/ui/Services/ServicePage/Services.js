import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SubscribeForm from '../../SubscribeForm'
import StunningHeader from '../../StunnigHeader'
import ServicesItems from './ServiceItems/ServicesItems'

class Services extends Component {

    render() {

        return (
            <div className="content-wrapper">

                {/*<!-- Stunning Header -->*/}
                <StunningHeader title={'Our Services'} img={'stunning-header-bg-violet'}/>
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


                {/*<!-- Services Items -->*/}


                <ServicesItems/>


                {/*<!-- End Services Items -->*/}


                {/*<!-- Features Item -->*/}


                <div className="container-fluid">
                    <div className="row bg-border-color medium-padding120">
                        <div className="container">
                            <div className="row pb30">
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="features-item">

                                        <div className="features-item__thumb">
                                            <img src="img/features1.png" alt="image"/>
                                        </div>

                                        <div className="features-content">
                                            <a href="#" className="features-title">Local Search Strategy</a>
                                            <p className="features-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                sed diam nonummy nibh euismod tincidunt laoreet dolore magna.
                                            </p>
                                        </div>

                                        <a className="read-more" href="#">Read More
                                            <i className="seoicon-right-arrow"></i>
                                        </a>

                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="features-item">

                                        <div className="features-item__thumb">
                                            <img src="img/features2.png" alt="image"/>
                                        </div>

                                        <div className="features-content">
                                            <a href="#" className="features-title">Maps Search</a>
                                            <p className="features-text">Claritas est etiam processus dynamicus,
                                                qui sequitur mutationem consuetudium lectorum investigationes demonstraverunt.
                                            </p>
                                        </div>

                                        <a className="read-more" href="#">Read More
                                            <i className="seoicon-right-arrow"></i>
                                        </a>

                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="features-item">

                                        <div className="features-item__thumb">
                                            <img src="img/features3.png" alt="image"/>
                                        </div>

                                        <div className="features-content">
                                            <a href="#" className="features-title">Link Building & Content</a>
                                            <p className="features-text">Investigationes demonstraverunt lectores legere me lius
                                                quod ii legunt saepius per seacula quarta decima et quinta decima.
                                            </p>
                                        </div>

                                        <a className="read-more" href="#">Read More
                                            <i className="seoicon-right-arrow"></i>
                                        </a>

                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="features-item">

                                        <div className="features-item__thumb">
                                            <img src="img/features4.png" alt="image"/>
                                        </div>

                                        <div className="features-content">
                                            <a href="#" className="features-title">Paid Search Advertising</a>
                                            <p className="features-text">Claritas est etiam processus dynamicus, qui sequitur mutationem
                                                consuetudium lectorum investigationes demonstraverunt.
                                            </p>
                                        </div>

                                        <a className="read-more" href="#">Read More
                                            <i className="seoicon-right-arrow"></i>
                                        </a>

                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="features-item">

                                        <div className="features-item__thumb">
                                            <img src="img/features6.png" alt="image"/>
                                        </div>

                                        <div className="features-content">
                                            <a href="#" className="features-title">Custom Website Design</a>
                                            <p className="features-text">Investigationes demonstraverunt lectores legere me lius quod ii
                                                legunt saepius per seacula quarta decima et quinta decima.
                                            </p>
                                        </div>

                                        <a className="read-more" href="#">Read More
                                            <i className="seoicon-right-arrow"></i>
                                        </a>

                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="features-item">

                                        <div className="features-item__thumb">
                                            <img src="img/features5.png" alt="image"/>
                                        </div>

                                        <div className="features-content">
                                            <a href="#" className="features-title">Custom Email Design</a>
                                            <p className="features-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                sed diam nonummy nibh euismod tincidunt laoreet dolore magna.
                                            </p>
                                        </div>

                                        <a className="read-more" href="#">Read More
                                            <i className="seoicon-right-arrow"></i>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<!-- End Features Item -->*/}


                <div className="container pb120 pt120">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading">
                                <h4 className="h1 heading-title">Our Product Based Services</h4>
                                <div className="heading-line">
                                    <span className="short-line"></span>
                                    <span className="long-line"></span>
                                </div>
                                <p className="heading-text c-dark">Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
                                    Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row pb30">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <ul className="list list--secondary">
                                <li>
                                    <i className="seoicon-check"></i>
                                    <a href="#">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore wisi enim ad minim veniam.
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <ul className="list list--secondary">
                                <li>
                                    <i className="seoicon-check"></i>
                                    <a href="#">Mirum est notare quam littera gothica, quam nunc putamus parum,
                                        anteposuerit litterarum formas duis dolore te feugait nulla facilisi.
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb30">
                            <a href="22_contacts.html" className="btn btn-medium btn--blue">
                                <span className="text">Free SEO Consultation</span>
                                <span className="semicircle"></span>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb30">
                            <a href="22_contacts.html" className="btn btn-medium btn--yellow">
                                <span className="text">Request a Free Quote</span>
                                <span className="semicircle"></span>
                            </a>
                        </div>
                    </div>
                </div>


                {/*<!-- Subscribe Form -->*/}

                <SubscribeForm/>

                {/*<!-- End Subscribe Form -->*/}

            </div>
        );
    }
}

export default Services;