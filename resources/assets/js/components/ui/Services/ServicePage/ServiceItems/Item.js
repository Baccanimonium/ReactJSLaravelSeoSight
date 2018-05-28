import React from 'react';

export const Item = (itemsData) => {
    const  {img,title,text,color} = itemsData.data
    const backgroundColor = { backgroundColor : color }
    return(
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="servises-item" style={backgroundColor}>
                    <div className="servises-item__thumb">
                        <img src={img} alt="service"/>
                    </div>
                    <div className="servises-item__content">
                        <h4 className="servises-title" dangerouslySetInnerHTML={{__html: title}}></h4>
                        <p className="servises-text">{text}
                        </p>
                    </div>

                    <a href="04_service_detail_seo.html" className="read-more"><i className="seoicon-right-arrow"></i></a>

                </div>
            </div>

    )
}
export const DefaultItem = () => {

    return(

        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="services-main">
                <div className="heading">
                    <h4 className="h1 heading-title">Full Services of Our Digital Agency</h4>
                    <div className="heading-line">
                        <span className="short-line"></span>
                        <span className="long-line"></span>
                    </div>
                    <p className="heading-text">Qolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibham liber tempor cum soluta nobis.
                    </p>
                </div>

                <a href="21_seo_analysis.html" className="btn btn-medium btn--dark btn-hover-shadow">
                    <span className="text">Free SEO Analysis</span>
                    <span className="semicircle"></span>
                </a>
            </div>
        </div>

    )
}
// const checkCloseRow=(i,itemsLength)=>{if (itemsLength === i + 1  || i % 3 === 1) {return `</div>`}}
// const checkNewRow=(i)=>{
//     if (i !== 0 && i % 3 === 2) {return(`<div className="row pb120"> )}
//         }
