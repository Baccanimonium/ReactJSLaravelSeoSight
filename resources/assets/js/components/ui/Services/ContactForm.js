import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            websiteURL : '',
            name : '',
            phone : '',
            email : '',
            company : '',
            details : '',
        }
    }
    render() {
        const textAreaStyle = {height: '250px'}
        return (
            <form onSubmit={(e) =>this.handleSubmit(e)} className="contact-form" method="post" >
                <div className="row">

                    <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <input name="permalink"
                                       onChange={(e) =>this.handleChange('websiteURL',e)}
                                       value={this.state.websiteURL}
                                       className="email input-standard-grey"
                                       placeholder="Website URL"
                                       type="url"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <input name="name"
                                       onChange={(e) =>this.handleChange('name',e)}
                                       value={this.state.name}
                                       className="email input-standard-grey"
                                       required
                                       placeholder="Your Name"
                                       type="text"
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <input name="phone"
                                       onChange={(e) =>this.handleChange('phone',e)}
                                       value={this.state.phone}
                                       className="email input-standard-grey"
                                       placeholder="Phone"
                                       type="text"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <input name="email"
                                       onChange={(e) =>this.handleChange('email',e)}
                                       value={this.state.email}
                                       className="email input-standard-grey"
                                       required
                                       placeholder="Email Address"
                                       type="email"
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <input name="company"
                                       onChange={(e) =>this.handleChange('company',e)}
                                       value={this.state.company}
                                       className="email input-standard-grey"
                                       placeholder="Company"
                                       type="text"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <textarea name="message"
                                  onChange={(e) =>this.handleChange('details',e)}
                                  value={this.state.details}
                                  className="email input-standard-grey"
                                  required
                                  placeholder="Details"
                                  style={textAreaStyle}
                        ></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="submit-block table">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 table-cell">
                            <button className="btn btn-medium btn--breez btn-hover-shadow">
                                <span className="text">Send Inquiry</span>
                                <span className="semicircle"></span>
                            </button>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 table-cell">
                            <div className="submit-block-text">
                                Please, let us know any particular things to check and the best time
                                to contact you by phone (if provided).
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
    handleSubmit (e){
        e.preventDefault()

    }
    handleChange (type, e){
        const {value} = e.target
        this.setState({
            [type]: value
        })
    }
}

export default ContactForm