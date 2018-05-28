import React from 'react';

const Slide = (slidesData) => {
    const  {title, text, created_at, user, color} = slidesData.data

    return(
        <article className="hentry post">

            <time className="post__date published " >
                {created_at}
            </time>

            <div className="post__content">
                <h2 className="post__title entry-title">
                    <a href="15_blog_details.html">{title}</a>
                </h2>

                <p className="post__text">{text}</p>

            </div>

            <div className="post__author author vcard">
                <div className="post-avatar">
                    <img src={user.avatar} alt="author"/>
                </div>
                <span className="post__author-name fn"> Posted by <a href="#" className="post__author-link">{user.name}</a></span>
            </div>

        </article>
    )
}

export default Slide
