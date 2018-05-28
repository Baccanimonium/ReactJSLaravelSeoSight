import React, {Component} from 'react'
import 'react-select/dist/react-select.css'
import {NavLink} from 'react-router-dom'
import {forgotPassword,clearErrors} from "../../actionCreators/Auth"
import {connect} from 'react-redux'
import FormValidation from '../decorators/FormValidation'

    class ResetPassword extends Component{
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
        handleRegister(e) {
            const{dispatchForgotPassword}=this.props
            e.preventDefault()
            const formData = {
                email: this.props.email,
            }
            dispatchForgotPassword(formData)
        }
    render(){
        const {authData, handleUserInput, showErrorsFromServer, errorClass, formValid} = this.props

        return (
            <div className="content-wrapper">
                <div className="header-spacer"></div>
                <div className="container">
                    <div className="row medium-padding120 rowFlexWrap">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="heading align-center" >
                                <h4 className="h1 heading-title" ref={ (h4Element) => this.h4Element = h4Element} style={{display: 'inline'}}>Reset Password Form</h4>
                                <div className="heading-line">
                                    <span className="short-line" style={{width:`${this.state.h4width*0.23}px`}}></span>
                                    <span className="long-line" style={{width:`${this.state.h4width*0.77}px`}}></span>
                                </div>
                                {showErrorsFromServer()}
                                {this.props.authData.forgotPasswordStatus.length? <h5 className="heading-subtitle"  >
                                    {this.props.authData.forgotPasswordStatus.data}
                                </h5>: ''}
                            </div>
                            <form id="login-form" action="" onSubmit={(e) =>this.handleRegister(e)} method="post">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 align-center">
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
                                <div className="col-lg-12 col-md-12 col-xs-12">
                                    <div className="align-center">
                                        {authData.tryLogin ?
                                            <a className="load-more" id="load-more-button" data-load-link="items-to-load.html" data-container="items-grid">
                                            <span className="load-more-img-wrap">
                                                <img src="img/load-more-line.png" alt="load-more"/>
                                            </span>
                                            </a>
                                            :
                                            <button className="btn btn-medium btn--rose btn-hover-shadow"
                                                    type="submit"
                                                    disabled={!formValid}
                                            >
                                                <span className="text">Send Password Reset Link</span>
                                                <span className="semicircle"></span>
                                            </button>
                                        }
                                        <NavLink to="/login" >
                                            <div className="btn btn-medium btn--breez btn-hover-shadow" style={{ marginLeft: '20px'}}>
                                                <span className="text">Back to Login</span>
                                                <span className="semicircle"></span>
                                            </div>
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
        authData: state.auth,
        clientsCompanyItems: state.clientsCompany
    }
}
const mapToDispatch ={
    dispatchForgotPassword: forgotPassword,
    dispatchClearErrors: clearErrors,


}

const validationFields = ['email']
export default connect(mapStateToProps, mapToDispatch)(FormValidation(ResetPassword,validationFields))
