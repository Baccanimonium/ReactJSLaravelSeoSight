import React from 'react';

const Slide = (slidesData) => {

    const  {img} = slidesData.data
    const parsedImg =JSON.parse(img)
    return(
        <a href={parsedImg.hover} className="client-image">
            <img src={parsedImg.default} alt="logo" className="hover"/>
        </a>
    )
}

export default Slide
