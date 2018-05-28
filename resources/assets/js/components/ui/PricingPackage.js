import React from 'react';
import PricingTable from './MainPage/PriceList/PricingTable'
const PricingPackage = ({}) => {

    return(
        <div className="content-wrapper">
            <div className="header-spacer" ></div>
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

            <div className="container-fluid" style={{backgroundImage: 'url(img/background-element.png)'}}>
                <div className="header-elements" style={{minHeight: '350px', padding: '140px 70px', textAlign: 'center'}}>
                    <h1 className="title" style={{color: '#fff'}}>Pricing Tables</h1>
                </div>
            </div>

            <PricingTable/>



        </div>
    )
}

export default PricingPackage