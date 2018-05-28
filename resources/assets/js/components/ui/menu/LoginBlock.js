import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser,logoutUser} from "../../../actionCreators/Auth"

class LoginBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            focused: false
        }
    }
    handleLogOut(){
        this.handleFocus()
        this.props.dispatchLogout()
    }
    handleFocus(){

        this.setState(prevState =>({
            focused: !prevState.focused }))
    }
    componentWillMount(){
        const { dispatchGetUser} = this.props
        dispatchGetUser()
    }

    render() {
        const {user, login}=this.props.authData
        return (
            login?
                <div className="login-block" onMouseEnter={(e) =>this.handleFocus(e)} onMouseLeave={(e) =>this.handleFocus(e)}>
                    <img src={`${this.context.appUrl}${user.avatar}`} className="sign-in"/>
                    {user.name}
                    <ul className={this.state.focused ?  "dropdown drop-up block-block dropDownAdminMenu" : "dropdown block-none" } style={{position:'absolute'}} >
                        <li className="hover-ver2">
                            <button onClick={(e) =>this.handleLogOut(e)}>
                                logout
                            </button>
                        </li>
                        <li className="hover-ver2">
                        <NavLink  to="/admin">
                            Admin panel
                        </NavLink>
                    </li>
                    </ul>
                </div>
                :
                <div className="login-block">
                    <img src={`${this.context.appUrl}img/signin_dark.png`} className="sign-in"/>
                    <NavLink  to='/login'>
                        Sign in
                    </NavLink>
                </div>

        )
    }
}
function mapStateToProps(state) {
    return{
        authData: state.auth
    }
}
const mapToDispatch ={
    dispatchGetUser: getUser,
    dispatchLogout: logoutUser
}

export default connect(mapStateToProps, mapToDispatch)(LoginBlock)

LoginBlock.contextTypes ={
    appUrl: PropTypes.string
}