import React from 'react';

const Slide = (slidesData) => {
    const  {img,title, text, url, type, color} = slidesData.data
    const backgroundColor = { backgroundColor : color }
    return(
            <div className="container table full-height">
                {
                    type === 'fullWidth' ?
                <div className="row table-cell">
                    <div className="col-lg-5 table-cell">
                        <div className="slider-content">
                            <h3 className="slider-content-title" data-swiper-parallax="-100" dangerouslySetInnerHTML={{__html: title}}></h3>
                            <h6 className="slider-content-text" data-swiper-parallax="-200">{text}
                            </h6>

                            <div className="main-slider-btn-wrap" data-swiper-parallax="-300">

                                <a href={url}
                                   className="btn btn-medium btn--dark btn-hover-shadow">
                                    <span className="text">learn more</span>
                                    <span className="semicircle"></span>
                                </a>

                                <a href={url} className="btn btn-small "
                                   data-swiper-parallax="-300" style={backgroundColor}>
                                    <span className="text">Our Services</span>
                                    <i className="seoicon-right-arrow"></i>
                                </a>

                            </div>

                        </div>
                    </div>

                    <div className="col-lg-7 table-cell">
                        <div className="slider-thumb" data-swiper-parallax="-300" data-swiper-parallax-duration="500">
                            <img src={img} alt="slider"/>
                        </div>
                    </div>

                </div>
                    :
                    <div className="row table-cell">

                    <div className="col-lg-12">

                        <div className="slider-content align-center">
                            <h3 className="h1 slider-content-title c-dark" data-swiper-parallax="-100" dangerouslySetInnerHTML={{__html: title}}></h3>
                            <h5 className="slider-content-text" data-swiper-parallax="-200">{text}
                            </h5>

                            <div className="main-slider-btn-wrap" data-swiper-parallax="-300">

                                <a href={url}
                                   className="btn btn-medium btn--dark btn-hover-shadow">
                                    <span className="text">learn more</span>
                                    <span className="semicircle"></span>
                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-12">
                        <div className="slider-thumb" data-swiper-parallax="-400" data-swiper-parallax-duration="600">
                            <img src={img} alt="slider"/>
                        </div>
                    </div>

                </div>
                }

            </div>
    )
}

export default Slide
