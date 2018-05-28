import React from 'react';
import PropTypes from 'prop-types'
import { Scrollbars } from 'react-custom-scrollbars';


class popUpRightMenu extends React.Component {

    renderThumb({ style, ...props }) {
        const thumbStyle = {
            backgroundColor: '#232232'
        }

        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props}/>
        )
    }
    render() {
        return (

            <div className="mCustomScrollbar" data-mcs-theme="dark">


                <div className={this.props.isOpen ? "popup right-menu sideMenuOpened" : "popup right-menu"}>
                    <Scrollbars style={{ width: 500, height: '100%'  }} renderTrackHorizontal={(e) => this.renderThumb(e)}>
                    <div className="right-menu-wrap">

                        <div className={this.props.isOpen ? "user-menu-close opened-close-menu-button"  : "user-menu-close"} onClick={(e) => this.props.onClick(e)}>
                            <a href="#" className="user-menu-content">
                                <span></span>
                                <span></span>
                            </a>
                        </div>

                        <div className="logo">
                            <a href="index.html" className="full-block-link"></a>
                            <img src={`${this.context.appUrl}img/logo-eye.png`} alt="Seosight"/>
                                <div className="logo-text">
                                    <div className="logo-title">Seosight</div>
                                </div>
                        </div>

                        <p className="text">Investigationes demonstraverunt lectores legere me lius quod
                            ii legunt saepius est etiam processus dynamicus.
                        </p>

                    </div>

                    <div className="widget login">

                        <h4 className="login-title">Sign In to Your Account</h4>
                        <input className="email input-standard-grey" placeholder="Username or Email" type="text"/>
                            <input className="password input-standard-grey" placeholder="Password" type="password"/>
                                <div className="login-btn-wrap">

                                    <div className="btn btn-medium btn--dark btn-hover-shadow">
                                        <span className="text">login now</span>
                                        <span className="semicircle"></span>
                                    </div>

                                    <div className="remember-wrap">

                                        <div className="checkbox">
                                            <input id="remember" type="checkbox" name="remember" value="remember"/>
                                                <label htmlFor="remember">Remember Me</label>
                                        </div>

                                    </div>

                                </div>

                                <div className="helped">Lost your password?</div>
                                <div className="helped">Register Now</div>

                    </div>



                    <div className="widget contacts">

                        <h4 className="contacts-title">Get In Touch</h4>
                        <p className="contacts-text">Lorem ipsum dolor sit amet, duis metus ligula amet in purus,
                            vitae donec vestibulum enim, tincidunt massa sit, convallis ipsum.
                        </p>

                        <div className="contacts-item">
                            <img src={`${this.context.appUrl}img/contact4.png`} alt="phone"/>
                                <div className="content">
                                    <a href="#" className="title">8 800 567.890.11</a>
                                    <p className="sub-title">Mon-Fri 9am-6pm</p>
                                </div>
                        </div>

                        <div className="contacts-item">
                            <img src={`${this.context.appUrl}img/contact5.png`} alt="phone"/>
                                <div className="content">
                                    <a href="#" className="title">info@seosight.com</a>
                                    <p className="sub-title">online support</p>
                                </div>
                        </div>

                        <div className="contacts-item">
                            <img src={`${this.context.appUrl}img/contact6.png`} alt="phone"/>
                                <div className="content">
                                    <a href="#" className="title">Melbourne, Australia</a>
                                    <p className="sub-title">795 South Park Avenue</p>
                                </div>
                        </div>

                    </div>
                    </Scrollbars>
                </div>

            </div>

        );
    }
}

export default popUpRightMenu
popUpRightMenu.contextTypes ={
    appUrl: PropTypes.string
}