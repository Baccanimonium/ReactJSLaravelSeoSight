import React from 'react'
import {Route,Redirect,Switch} from "react-router-dom"
import {connect} from 'react-redux'
import {getUser} from "../../../actionCreators/Auth"
import DashBoard from './Index'
import SendPersonalInvitesForm from './SendPersonalInvitesForm'
class AdminRoute extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectToReferrer: false
        }
    }
    componentWillMount(){
        const { dispatchGetUser} = this.props
        dispatchGetUser()
    }

    render() {
        const {tryLogin, login  } = this.props.authData
        if (!tryLogin && !login) {
            return <Redirect
                to={{
                    pathname: "/login",
                    state: { from: this.props.location }
                }}
            />
        }
        return (
            <Switch>
                <Route  path = "/admin/send_invite" component = {SendPersonalInvitesForm} />
                <Route  exact path = "/admin" component = {DashBoard} />

            </Switch>
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
}

export default connect(mapStateToProps, mapToDispatch)(AdminRoute)


// export const AdminRoute   = ({ component: Component, ...rest }) => (
//
//     <Route
//
//         {...rest}
//         render={props =>
//             console.log(Component, rest)
//             // fakeAuth.isAuthenticated ? (
//             //     <Component {...props} />
//             // ) : (
//             //     <Redirect
//             //         to={{
//             //             pathname: "/login",
//             //             state: { from: props.location }
//             //         }}
//             //     />
//             // )
//         }
//     />
// )


// export default (OriginalComponent) => class AdminRoute extends Component {
//     constructor(props){
//         super(props)
//         this.handleUserInput = this.handleUserInput.bind(this);
//         this.state = {
//
//         }
//     }
//     componentWillMount() {
//
//     }
//
//     render() {
//         console.log(this.props)
//         return <OriginalComponent{...this.props}
//                                  {...this.state}
//                                  // handleUserInput={this.handleUserInput}
//                                  // handleToggleCheckBox={(e) =>this.handleToggleCheckBox(e)}
//                                  // showErrorsFromServer={(e) =>this.showErrorsFromServer(e)}
//                                  // errorClass={(e) =>this.errorClass(e)}
//                                  // handleSelectInput={(e) =>this.handleSelectInput(e)}
//
//         />
//     }
// }