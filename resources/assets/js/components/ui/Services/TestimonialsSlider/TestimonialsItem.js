import React, {Component} from 'react'

const TestimonialsItem = (slidesData) => {
    const  {blog,text, user} = slidesData.data
    return(
        <div className="case-slider-item swiper-slide">
            <div className="testimonial-item testimonial-arrow mb30">
                <div className="testimonial-text">
                    {text}
                </div>

                <div className="author-info-wrap table">
                    <div className="testimonial-img-author table-cell">
                        <img src={`${slidesData.appUrl}${user.avatar}`} alt="author"/>
                    </div>
                    <div className="author-info table-cell">
                        <h6 className="author-name">{user.name}</h6>
                        <div className="author-company c-primary">{blog.title}</div>
                    </div>
                </div>
                <div className="quote">
                    <i className="seoicon-quotes"></i>
                </div>

            </div>
        </div>

    )
}

export default TestimonialsItem
