import React from 'react';

const Slide = (slidesData) => {
    const  {blog,text, user} = slidesData.data
    return(
        <div className="testimonial-slider-item swiper-slide">
            <div className="testimonial-content">
                <p className="text" data-swiper-parallax="-200">{text}
                </p>
                <a href="#" className="author" data-swiper-parallax="-150">{user.name}</a>
                <a href="#" className="company" data-swiper-parallax="-150">{blog.title}</a>

            </div>
            <div className="avatar" data-swiper-parallax="-50">
                <img src={user.avatar} alt="avatar"/>
            </div>
        </div>
    )
}

export default Slide
