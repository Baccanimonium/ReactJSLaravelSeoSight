import {APP_URL,LOGIN,GET_USER,LOGOUT,REGISTER,SEND_INVITE,RESET_PASSWORD,FORGOT_PASSWORD,CLEAR_ERRORS,START,SUCCESS,FAIL}  from '../constants'
import axios from 'axios'
export const loadDataSuccess = (data, type, page = null) => {
    return {
        type: type + SUCCESS,
        data,
        page
    }
}

export function loginUser(formData){
    return (dispatch, getState) => {
        const {auth} = getState()
        if (auth.tryLogin || auth.login) return
        //
        dispatch({
            type: LOGIN + START,
        })
     axios.post(`${APP_URL}login/`, formData)
         .then(response => {dispatch(loadDataSuccess(response.data, LOGIN))})
         .catch(error => {dispatch({
             type: LOGIN + FAIL,
             payload: { error }
            })
         })
    }
}

export function getUser(){
    return (dispatch, getState) => {
        const {auth} = getState()
        if (auth.tryLogin || auth.login) return
        //
        dispatch({
            type: GET_USER + START,
        })
      axios.get(`${APP_URL}get_user/`)
         .then(response => {dispatch(loadDataSuccess(response.data, GET_USER))})
          .catch(error => {dispatch({
              type: GET_USER + FAIL,
              payload: { error }
          })
          })
    }
}
export function registerUser (formData){

    return (dispatch, getState) => {
        const {auth} = getState()
        if (auth.tryLogin || auth.login) return
        //
        dispatch({
            type: REGISTER + START,
        })


     axios.post(`${APP_URL}register/`, formData)
        .then(response => {dispatch(loadDataSuccess(response, REGISTER))})
         .catch(error => {dispatch({
             type: REGISTER + FAIL,
             payload: { error }
            })
         })
    }
}
export function sendInvite (formData){

    return (dispatch, getState) => {
        const {auth} = getState()
        if (auth.sendInvite && !auth.login) return
        //
        dispatch({
            type: SEND_INVITE + START,
        })
     axios.post(`${APP_URL}admin/send_invite/`, formData)
        .then(response => {dispatch(loadDataSuccess(response, SEND_INVITE))})
         .catch(error => {dispatch({
             type: SEND_INVITE + FAIL,
             payload: { error }
            })
         })
    }
}
export function logoutUser(){
    return (dispatch, getState) => {
        const {auth} = getState()
        if (!auth.login) return
        //
        dispatch({
            type: LOGOUT,
        })
        axios.post(`${APP_URL}logout/`)
            .catch(error => {dispatch({
                type: LOGOUT + FAIL,
                payload: { error }
                })
            })
    }
}
export function clearErrors(){
    return (dispatch) => {
        dispatch({
            type: CLEAR_ERRORS,
        })
    }
}
export function forgotPassword(formData){
    return (dispatch, getState) => {
        const {auth} = getState()
        if (auth.tryLogin || auth.login) return
        //
        dispatch({
            type: FORGOT_PASSWORD + START,
        })
        axios.post(`${APP_URL}forgot_password/`, formData)
            .then(response => {dispatch(loadDataSuccess(response.data, FORGOT_PASSWORD))})
            .catch(error => {dispatch({
                type: FORGOT_PASSWORD + FAIL,
                payload: { error }
                })
            })
    }
}