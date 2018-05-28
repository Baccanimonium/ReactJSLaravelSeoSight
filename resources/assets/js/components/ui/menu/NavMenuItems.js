import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

function tabRow(items){

        return items.map(function(object, i){
            return <SubNavMenuItems obj={object} key={i} />;
        })

}
class NavMenuItems extends Component {


    // static PropTypes = {}
    constructor(props) {
        super(props);
        this.state = {focused: false};
    }
    handleFocus(){

        this.setState(prevState =>({
            focused: !prevState.focused }))
    }
    render() {
        const {obj} =this.props
        return (
            <li className="" onMouseEnter={(e) =>this.handleFocus(e)} onMouseLeave={(e) =>this.handleFocus(e)}>
                <NavLink  to={obj.path} >{obj.name}</NavLink>

                {obj.subPages instanceof Array ? <ul className={this.state.focused ?  "dropdown drop-up block-block" : "dropdown block-none" }  >
                    {tabRow(obj.subPages)}
                </ul> : null }
            </li>
        )
    }

}

class SubNavMenuItems extends Component {
    // static PropTypes = {}

    render() {
        const {obj} =this.props
        return (
            <li className="hover-ver2">
                <NavLink  to={obj.path}>
                    <i className="seoicon-pin-map"></i>
                    {obj.name}
                </NavLink>
            </li>

        )
    }
}

export default NavMenuItems;