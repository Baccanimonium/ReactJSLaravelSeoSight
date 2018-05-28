import React from 'react';

const Testimonials = (data) => {

    const {item, appUrl}=data
    const parsedImg =JSON.parse(item.user.clients_company.img)
    return(
        <div className="container">
        <div className="row medium-padding120">z
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 table-cell">
                <div className="heading">
                    <h4 className="h1 heading-title">From The Client</h4>
                    <div className="heading-line">
                        <span className="short-line"></span>
                        <span className="long-line"></span>
                    </div>
                    <p className="heading-text c-dark">{item.text}
                    </p>
                </div>

                <div className="author-info-wrap table">
                    <div className="testimonial-img-author table-cell">
                        <img src={`${appUrl}${item.user.avatar}`} alt="author"/>
                    </div>
                    <div className="author-info table-cell">
                        <h6 className="author-name c-primary">{item.user.name}</h6>
                        <div className="author-position">{item.user.clients_company.name}</div>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-lg-offset-1 col-md-3 col-md-offset-1 col-sm-12 col-xs-12 table-cell">
                <div className="client-item">
                    <a href="09_our_clients.html" className="client-image">
                        <img src={`${appUrl}${parsedImg.default}`} alt="logo" className="hover"/>
                    </a>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Testimonials;