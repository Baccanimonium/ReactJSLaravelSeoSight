import React from 'react';
import PropTypes from 'prop-types'
import Socials from './Socials'
import Menu from './Menu'
import PopUpRightMenu from './popUpRightMenu'
import SelectLanguage from './SelectLanguage'
import LoginBlock from './LoginBlock'


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        }
    }


    handleToggleMenu() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }
    render() {

        return (
            <div>
                <div className="top-bar top-bar-dark">
                    <div className="container">
                        <div className="top-bar-contact">
                            <div className="contact-item">
                                <img src={`${this.context.appUrl}img/united-states-of-america.png`} className="flags" alt="flag"/>
                                <SelectLanguage/>
                            </div>

                            <div className="contact-item">
                                8 800 567.890.11
                            </div>

                            <div className="contact-item" >
                                <a href="#">info@seosight.com</a>
                            </div>

                            <div className="contact-item" >
                                <span>Mon. - Fri.</span> 10:00 - 21:00
                            </div>
                        </div>

                        <LoginBlock/>

                        <div className="follow_us">
                            <span>Follow us:</span>

                            <Socials/>

                        </div>
                        <a href="#" className="top-bar-close" id="top-bar-close-js">
                            <span></span>
                            <span></span>
                        </a>
                    </div>
                </div>

                <Menu onClick={(e) =>this.handleToggleMenu(e)}/>
                <PopUpRightMenu isOpen={this.state.isOpen} onClick={(e) =>this.handleToggleMenu(e)}/>
            </div>
        )
    }
}

export default Header


Header.contextTypes ={
    appUrl: PropTypes.string
}