import React from 'react';

const Case = (caseProps) => {
    const  {img,title} = caseProps.data
    return(
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="case-item">
                <div className="case-item__thumb">
                    <img src={img} alt="our case"/>
                </div>
                <h6 className="case-item__title"><a href="#">{title}</a></h6>
            </div>
        </div>
    )
}

export default Case;