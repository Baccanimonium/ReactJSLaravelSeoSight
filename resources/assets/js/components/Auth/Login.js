import React, {Component} from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import {loginUser,clearErrors} from "../../actionCreators/Auth"
import {connect} from 'react-redux'
import FormValidation from '../decorators/FormValidation'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            h4width : 0,
        }
    }
    componentDidMount() {
        const width = this.h4Element.offsetWidth
        this.setState({
            h4width: width,
        })
    }
    componentWillUnmount(){
        this.props.dispatchClearErrors()
    }
    handleLogin(e) {
        const{dispatchLoginUser}=this.props
        e.preventDefault()
        const formData = {
            email: this.props.email,
            password: this.props.password,
            remember: this.props.remember? this.props.remember : ''
        }
        dispatchLoginUser(formData)
    }
    render(){
        const {authData, handleUserInput, showErrorsFromServer, errorClass, formValid,handleToggleCheckBox } = this.props
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        if(authData.login)
            {
                return(
                 <Redirect to={from} />
                )
            }
        return (
            <div className="content-wrapper">
                <div className="header-spacer"></div>
                <div className="container">
                    <div className="row medium-padding120 rowFlexWrap">
                        <div className="col-md-8 col-md-offset-2">


                            <div className="heading align-center" >
                                <h4 className="h1 heading-title" ref={ (h4Element) => this.h4Element = h4Element} style={{display: 'inline'}}>Login Form</h4>
                                <div className="heading-line">
                                    <span className="short-line" style={{width:`${this.state.h4width*0.23}px`}}></span>
                                    <span className="long-line" style={{width:`${this.state.h4width*0.77}px`}}></span>
                                </div>

                                {showErrorsFromServer()}

                            </div>
                            <form id="login-form" action="" onSubmit={(e) =>this.handleLogin(e)} method="post">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 align-center">
                                    <input
                                        onChange={(e) =>handleUserInput('email',e)}
                                        value={this.props.email}
                                        autoComplete="off"
                                        name="email"
                                        type="email"
                                        className={`email input-standard-grey marginBottom ${errorClass(this.props.formErrors.email)}`}
                                        placeholder="email"
                                    />
                                    <label htmlFor="email" className="control-label">{this.props.formErrors.email}</label>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 align-center">
                                    <input
                                        onChange={(e) =>handleUserInput('password',e)}
                                        value={this.props.password}
                                        autoComplete="off"
                                        name="password"
                                        type="password"
                                        className={`email input-standard-grey marginBottom ${errorClass(this.props.formErrors.password)}`}
                                        placeholder="password"
                                    />
                                    <label htmlFor="password" className="control-label">{this.props.formErrors.password}</label>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-5 col-md-offset-4">
                                        <div className="remember-wrap" onClick={(e) =>handleToggleCheckBox(e)}>

                                            <div className="checkbox">
                                                <input id="remember" name="remember" value="remember" type="checkbox"/>
                                                <label htmlFor="remember">Remember Me</label>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-xs-12">
                                    <div className="align-center">
                                        {authData.tryLogin ?
                                            <a className="load-more" id="load-more-button" data-load-link="items-to-load.html" data-container="items-grid">
                                            <span className="load-more-img-wrap">
                                                <img src="img/load-more-line.png" alt="load-more"/>
                                            </span>
                                            </a>
                                            :
                                            <button className="btn btn-medium btn--breez btn-hover-shadow col-md-3 col-md-offset-3"
                                                    type="submit"
                                                    disabled={!formValid}
                                            >
                                                <span className="text">Login</span>
                                                <span className="semicircle"></span>
                                            </button>
                                        }
                                        <NavLink to="/register" >
                                            <div className="btn btn-medium btn--rose btn-hover-shadow" style={{ marginLeft: '20px'}}>
                                                <span className="text">Register</span>
                                                <span className="semicircle"></span>
                                            </div>
                                        </NavLink>
                                        <NavLink to="/reset_password" >
                                            <span className="text" style={{ marginLeft: '20px', textDecoration:'underline'}}>Forgot Your Password?</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

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
    dispatchLoginUser: loginUser,
    dispatchClearErrors: clearErrors
}
const validationFields = ['email','password']
export default connect(mapStateToProps, mapToDispatch)(FormValidation(Login,validationFields))
