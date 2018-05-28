import React from 'react';

const PriceList = (priceData) => {
    const  {img,title,price,text} = priceData.data
    return(
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="pricing-tables-item">
                <div className="pricing-tables-icon">
                    <img src={img} alt="personal"/>
                </div>
                <a href="#" className="pricing-title">{title}</a>

                <ul className="pricing-tables-position" dangerouslySetInnerHTML={{__html: text}}/>

                <h4 className="rate">${price}</h4>
                <a href="20_checkout.html" className="btn btn-medium btn--dark">
                    <span className="text">Order Now!</span>
                    <span className="semicircle"></span>
                </a>
                <img src="img/pricing-dots.png" className="dots" alt="dots"/>
            </div>

        </div>

    )
}

export default PriceList;