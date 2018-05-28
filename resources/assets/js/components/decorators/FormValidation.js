import React, {Component} from 'react'

export default (OriginalComponent, validationFields) => class FormValidation extends Component {
    constructor(props){
        super(props)
        this.handleUserInput = this.handleUserInput.bind(this);
        this.state = {
            formErrors:{},
            remember:false
        }
    }
    componentWillMount() {
        let validateObj = {}
        let formErrorsFields = {}
        this.listOfValidationFields =validationFields.reduce((acc, el, i, arr) => {
            if (arr.length === i +1) {
                return acc +'this.state.'+ el+'Valid'
            }
            return acc +'this.state.'+ el+'Valid ' + '&& '
        }, [])
        validationFields.forEach(function(element) {
            validateObj={...validateObj,...{[element+'Valid']: false}}
        })
        validationFields.forEach(function(element) {
            formErrorsFields={...formErrorsFields,...{[element]: ''}}

        })
        this.initValidationFields(validateObj,formErrorsFields)
    }
    componentDidMount() {
        if(this.props.match.path =='/register/:authCode' && this.props.match.params.authCode.length){
            this.setState({
                    codeValid: true
                }
            )
        }
    }
    initValidationFields(validateObj,formErrorsFields){
        this.setState(validateObj)
        this.setState({formErrors:{...formErrorsFields}})
    }
    handleUserInput (type, e){
        const {value} = e.target
        this.setState({
                [type]: value
            },
            () => { this.validateField(type, value) }
            )
    }
    validateField(fieldName, value) {

        let fieldValidationErrors = this.state.formErrors;
        let fieldValid = false

        switch(fieldName) {
            case 'email':
                let correctEmail =value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                fieldValid = correctEmail instanceof Array
                fieldValidationErrors.email = fieldValid ? '' : ' is invalid';
                break;
            case 'password':
                fieldValid = value.length >= 6;
                fieldValidationErrors.password = fieldValid ? '': ' is too short';
                break;
            case 'code':
                fieldValid = value.length >= 1 || this.props.match.params.authData.length;
                fieldValidationErrors.password = fieldValid ? '': `${fieldName} is required!`;
                break;
            default:
                fieldValid = value.length >= 1;
                fieldValidationErrors[fieldName] = fieldValid ? '': `${fieldName} is required!`
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            [fieldName +'Valid']: fieldValid,
        }, this.validateForm);
    }
    validateForm() {
        this.setState({formValid: eval(this.listOfValidationFields)});
    }
    handleToggleCheckBox() {
        this.setState(prevState => ({
            remember: !prevState.remember
        }))
    }
    showErrorsFromServer() {
        const {authData} = this.props
        if(!authData.error) return
        if(authData.errorsData === undefined) {
            return(
                <h5 className="heading-subtitle" style={{ color:'#a94442'}}>
                    Something gone wrong, please reboot this page.
                    Also this website require allowed cookie storage, please make sure you have enabled it in your browser
                </h5>
            )
        }

        const errors = authData.errorsData instanceof Array ?authData.errorsData.map((error, i) =>
            <h5 className="heading-subtitle" key={i} style={{ color:'#a94442'}} >
                {error}
            </h5>)
            :
            <h5 className="heading-subtitle" style={{ color:'#a94442'}} >
                {authData.errorsData}
            </h5>
        return errors
    }
    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }
    handleSelectInput(selectedOption){
        this.setState({
            clients_company_id: selectedOption.value
            })
    }

    render() {
        return <OriginalComponent{...this.props}
                                 {...this.state}
                                 handleUserInput={this.handleUserInput}
                                 handleToggleCheckBox={(e) =>this.handleToggleCheckBox(e)}
                                 showErrorsFromServer={(e) =>this.showErrorsFromServer(e)}
                                 errorClass={(e) =>this.errorClass(e)}
                                 handleSelectInput={(e) =>this.handleSelectInput(e)}

        />
    }
}



