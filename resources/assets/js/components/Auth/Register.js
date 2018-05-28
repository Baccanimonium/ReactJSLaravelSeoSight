import React, {Component} from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {NavLink} from 'react-router-dom'
import {registerUser,clearErrors} from "../../actionCreators/Auth"
import {loadClientsCompanyItems} from "../../actionCreators/clientsCompany"
import {connect} from 'react-redux'

import FormValidation from '../decorators/FormValidation'
    class Register extends Component{
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
            this.props.dispatchLoadClientsCompanyItems()

        }
        componentWillUnmount(){
            this.props.dispatchClearErrors()
        }
        handleRegister(e) {
            const{dispatchRegisterUser}=this.props
            e.preventDefault()
            const formData = {
                name: this.props.name,
                email: this.props.email,
                password: this.props.password,
                clients_company_id: this.props.clients_company_id || 1,
                avatar: this.props.avatar,
                code: this.props.code || this.props.match.params.authCode,
            }
            dispatchRegisterUser(formData)
        }
    render(){
        const {authData, handleUserInput, showErrorsFromServer, errorClass, formValid,clientsCompanyItems,handleSelectInput } = this.props
        const optionsClientsItems=clientsCompanyItems.clientsCompanyItems.reduce((acc, el, i) => {
            acc.push({value:el.id,label:el.name})
            return acc
        }, [])

        return (
            <div className="content-wrapper">
                <div className="header-spacer"></div>
                <div className="container">
                    <div className="row medium-padding120 rowFlexWrap">
                        <div className="col-md-8 col-md-offset-2">


                            <div className="heading align-center" >
                                <h4 className="h1 heading-title" ref={ (h4Element) => this.h4Element = h4Element} style={{display: 'inline'}}>Register Form</h4>
                                <div className="heading-line">
                                    <span className="short-line" style={{width:`${this.state.h4width*0.23}px`}}></span>
                                    <span className="long-line" style={{width:`${this.state.h4width*0.77}px`}}></span>
                                </div>

                                {showErrorsFromServer()}

                            </div>
                            <form id="login-form" action="" onSubmit={(e) =>this.handleRegister(e)} method="post">

                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 align-center">
                                    <input
                                        onChange={(e) =>handleUserInput('name',e)}
                                        value={this.props.name}
                                        autoComplete="off"
                                        name="name"
                                        type="text"
                                        className={`email input-standard-grey marginBottom ${errorClass(this.props.formErrors.name)}`}
                                        placeholder="name"
                                    />
                                    <label htmlFor="email" className="control-label">{this.props.formErrors.name}</label>
                                </div>
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
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 align-center">
                                    <input
                                        onChange={(e) =>handleUserInput('avatar',e)}
                                        value={this.props.avatar}
                                        autoComplete="off"
                                        name="avatar"
                                        type="text"
                                        className={`email input-standard-grey marginBottom ${errorClass(this.props.formErrors.avatar)}`}
                                        placeholder="avatar"
                                    />
                                    <label htmlFor="password" className="control-label">{this.props.formErrors.avatar}</label>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 align-center">
                                    <input
                                        onChange={(e) =>handleUserInput('code',e)}
                                        value={this.props.code || this.props.match.params.authCode}
                                        autoComplete="off"
                                        name="avatar"
                                        type="text"
                                        className={`email input-standard-grey marginBottom ${errorClass(this.props.formErrors.code)}`}
                                        placeholder="invitation code"
                                    />
                                    <label htmlFor="password" className="control-label">{this.props.formErrors.code}</label>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 align-center">
                                    <Select
                                        name="clients_company_id"
                                        value={this.props.clients_company_id ||1}
                                        options={optionsClientsItems}
                                        autosize={false}
                                        clearable={false}
                                        searchable={false}
                                        className="standard-grey marginBottom"
                                        onChange={(e) =>handleSelectInput(e)}
                                    />
                                    <label htmlFor="password" className="control-label">{this.props.formErrors.clients_company_id}</label>
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
                                                <span className="text">Register</span>
                                                <span className="semicircle"></span>
                                            </button>
                                        }
                                        <NavLink to="/login" >
                                            <div className="btn btn-medium btn--breez btn-hover-shadow" style={{ marginLeft: '20px'}}>
                                                <span className="text">Back to Login</span>
                                                <span className="semicircle"></span>
                                            </div>
                                        </NavLink>
                                        <NavLink to="/reset_password" >
                                            <span className="text" style={{display:'block', marginTop: '10px', textDecoration:'underline'}}>Forgot Your Password?</span>
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
    dispatchRegisterUser: registerUser,
    dispatchClearErrors: clearErrors,
    dispatchLoadClientsCompanyItems: loadClientsCompanyItems,

}

const validationFields = ['email','password','name','avatar','code']
export default connect(mapStateToProps, mapToDispatch)(FormValidation(Register,validationFields))
