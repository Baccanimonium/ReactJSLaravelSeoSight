import React, {Component} from 'react'
import {sendInvite,clearErrors} from "../../../actionCreators/Auth"
import {connect} from 'react-redux'
import FormValidation from '../../decorators/FormValidation'

class SendPersonalInvitesForm extends Component {
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
    handleSendInvite(e) {
        const{dispatchSendInvite}=this.props
        e.preventDefault()
        const formData = {
            email: this.props.email,
            message: this.props.message,
        }
        dispatchSendInvite(formData)
    }
    sendInviteStatus() {
        const {authData} = this.props
        if(authData.sendInvite || authData.sendInviteStatus instanceof Array) return
        return (
            <h5 className="heading-subtitle" style={{ color:'#46d68d'}}>
                {authData.sendInviteStatus.data}
            </h5>

        )
    }
    render(){
        const {authData, handleUserInput, showErrorsFromServer, errorClass, formValid } = this.props
        return (
            <div className="content-wrapper">
                <div className="header-spacer"></div>
                <div className="container">
                    <div className="row medium-padding120 rowFlexWrap">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="heading align-center" >
                                <h4 className="h1 heading-title" ref={ (h4Element) => this.h4Element = h4Element} style={{display: 'inline'}}>Sending invitations Form</h4>
                                <div className="heading-line">
                                    <span className="short-line" style={{width:`${this.state.h4width*0.23}px`}}></span>
                                    <span className="long-line" style={{width:`${this.state.h4width*0.77}px`}}></span>
                                </div>
                                {showErrorsFromServer()}
                                {this.sendInviteStatus()}
                            </div>
                            <form id="login-form" action="" onSubmit={(e) =>this.handleSendInvite(e)} method="post">
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
                                        onChange={(e) =>handleUserInput('message',e)}
                                        value={this.props.message}
                                        autoComplete="off"
                                        name="message"
                                        type="text-area"
                                        className={`email input-standard-grey marginBottom ${errorClass(this.props.formErrors.message)}`}
                                        placeholder="message"
                                    />
                                    <label htmlFor="password" className="control-label">{this.props.formErrors.message}</label>
                                </div>
                                <div className="col-lg-12 col-md-12 col-xs-12" >
                                    <div className="align-center">
                                        {authData.tryLogin ?
                                            <a className="load-more" id="load-more-button" data-load-link="items-to-load.html" data-container="items-grid">
                                            <span className="load-more-img-wrap">
                                                <img src="img/load-more-line.png" alt="load-more"/>
                                            </span>
                                            </a>
                                            :
                                            <button className="btn btn-medium btn--breez btn-hover-shadow col-md-4 col-md-offset-4"
                                                    type="submit"
                                                    disabled={!formValid}
                                            >
                                                <span className="text">Invite your Friend!</span>
                                                <span className="semicircle"></span>
                                            </button>
                                        }
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
    dispatchSendInvite: sendInvite,
    dispatchClearErrors: clearErrors
}
const validationFields = ['email','message']

export default connect(mapStateToProps, mapToDispatch)(FormValidation(SendPersonalInvitesForm,validationFields))
