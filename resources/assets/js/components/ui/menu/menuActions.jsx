import React from 'react';

class MenuActions extends React.Component {
    render() {
        return (
            <ul className="nav-add">
                <li className="cart">

                    <a href="#" className="js-cart-animate">
                        <i className="seoicon-basket"></i>
                        <span className="cart-count">0</span>
                    </a>

                    <div className="cart-popup-wrap">
                        <div className="popup-cart">
                            <h4 className="title-cart">No products in the cart!</h4>
                            <p className="subtitle">Please make your choice.</p>
                            <div className="btn btn-small btn--dark">
                                <span className="text">view all catalog</span>
                            </div>
                        </div>
                    </div>

                </li>

                <li className="search search_main">
                    <a href="#" className="js-open-search">
                        <i className="seoicon-loupe"></i>
                    </a>
                </li>
            </ul>
        );
    }
}

export default MenuActions;