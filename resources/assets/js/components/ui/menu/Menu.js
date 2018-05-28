import React, {Component} from 'react'
import PropTypes from 'prop-types'
import MenuActions from './menuActions'
import NavMenu from './navMenu'

import Logo from './logo'



class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowYPosition: 0,
            MenuShouldOpen : false
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', (e) => this.handleScroll(e));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', (e) => this.handleScroll(e));
    }
    handleScroll(e){
        this.setState(prevState =>({
            windowYPosition: e.pageY,
            MenuShouldOpen: prevState.windowYPosition -e.pageY > 0
        }))
    }
    handleClass(){
        if (this.state.windowYPosition <200) {
            return "header animated headroom--not-bottom swingInX headroom--top"
        }
        if (this.state.windowYPosition >200 && this.state.MenuShouldOpen === false)
            return"header animated headroom--not-bottom headroom--not-top swingOutX"
        if (this.state.windowYPosition >200 && this.state.MenuShouldOpen === true)
            return "header animated headroom--not-bottom headroom--not-top swingInX"

}
    render() {
        return (
                <header className={ this.handleClass()} id="site-header" >

                    <div className="container">

                        <div className="header-content-wrapper">

                            <a href="#" id="top-bar-js" className="top-bar-link">TOPBAR</a>

                            <Logo/>
                            <NavMenu/>
                            <MenuActions/>

                            <div className="user-menu open-overlay" onClick={(e) => this.props.onClick(e)}>
                                <a href="#" className="user-menu-content" >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                            </div>
                        </div>

                    </div>

                </header>
        )
    }
}

export default Menu;